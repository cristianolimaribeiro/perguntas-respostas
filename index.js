const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const connection = require('./database/database')
const Perguntas = require('./database/Perguntas')
const Respostas = require('./database/Respostas')

//Database - connection

connection.authenticate()
    .then(() =>{
        console.log('Conexão com banco de dados realizada com sucesso');
    })
    .catch((error) =>{
        console.log(`Erro de conexão: ${error}`);
    })

app.set('view engine', 'ejs') // passando para o Expressa utilizar o EJS com view engine para renderizar o html
app.use(express.static('public'))

//Body Parser
app.use(bodyParser.urlencoded({extended:false}))//traduz os dados enviado em uma estrutura javacript para poder ser usado
app.use(bodyParser.json())//Permite que se leia dados de formulário enviado via JSON
//ROTAS
app.get('/', (req, res) => {
    Perguntas.findAll({
        raw: true, 
        order:[['id','DESC']]
    }).then( perguntas => {
        res.render('index', {
            perguntas: perguntas
        })  
    })

})
app.get('/perguntas', (req, res) => {
    res.render('perguntas')
})
app.post('/salvarperguntas', (req,res) => {
    let title = req.body.title 
    let description = req.body.description
    
    Perguntas.create({
        title: title,
        description: description
    }).then(() =>{
        setTimeout(() => {
            res.redirect('/')
        }, 2000)
    })
})

app.get('/pergunta/:id', (req, res) => {
    let id = req.params.id 
    Perguntas.findOne({
        where: {id: id}
    }).then(pergunta => {
        if(pergunta !== undefined){ //achou a pergunta

            Respostas.findAll({
                raw: true, 
                order:[['id','DESC']],
                where: {
                    questionId: pergunta.id,
                }
            }).then((respostas => {
                res.render('pergunta',{
                    pergunta : pergunta,
                    respostas: respostas
                })

            }))
        } else { // não achou a pergunta 
            res.redirect('/')
        }
    })
}) 
app.post('/salvarrespostas', (req,res) => {
    let body = req.body.body
    let questionId = req.body.questionId

    console.log(questionId);

    Respostas.create({
        body: body,
        questionId: questionId
    }).then(() =>{
        setTimeout(() => {
            res.redirect(`/pergunta/${questionId}`)
        }, 2000)
    })
})

app.listen(8080, () => {
    console.log('server online');
})