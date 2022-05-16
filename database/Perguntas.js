const Sequelize = require('sequelize')
const connection = require('./database')

const Perguntas = connection.define('perguntas',{
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Perguntas.sync({force: false}).then(() =>{}) // se a tabela não existir será criada e se existir o force: flase impede de recriar

module.exports = Perguntas