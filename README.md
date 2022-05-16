
# Perguntas e Respostas 

Ele é um projeto a partir da idéia de funcionamento do Yahoo Respostas onde um usuário faz uma pergunta e outros usuários podem interagir respondendo-as.


## 🚀 Começando

Seguindo as instruções abaixo você poderá rodar o projeto em sua máquina afim de compreendê-lo melhor. Esse projeto foi construído para fins de aprendizado e melhor compreensão do **Node.js** 
### 📋 Pré-requisitos

Você precisará criar um banco de dados em sua máquina com [MySQL](https://www.mysql.com/)

O nome do banco fica ao seu critério. Mas será necessário fazer a conexão com seu banco criado. 

Caso queira utilizar o mesmo que utilizei crie o banco dessa forma 

```
CREATE DATABASE pr
```

e por suas credenciais no arquivo database.js 

```
const connection = new Sequelize('pr', 'seu usuário', 'sua senha', {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: { charset: 'utf8' } 
})
```
### 🔧 Instalação

Clone o projeto.

```
git clone https://github.com/cristianolimaribeiro/perguntas-respostas.git
```

Entre no diretório do projeto

```
cd perguntas-respostas
```

Instale as dependências

```
npm install
```

Inicie o servidor 

```
nodemon index.js 
```

Abra seu navegar através do endereço 

```
http://localhost:8080
```
## 📖 Aprendizados

Esse projeto foi de bastante relevância pois me permitiu conhecer esse maravilhoso mundo do **Node.js** onde tive contato com algumas tecnologias que são usadas grandemente pelas empresas como **Sequelize** para utilização de projetos com bancos de dados relacionais. Utilizei também o Express, conhecendo como esse framework facilita o desenvolvimento de aplicações.


## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [Express](https://expressjs.com/pt-br/) - O framework web usado
* [Sequelize](https://sequelize.org/) - ORM para transações com banco de dados
* [EJS](https://ejs.co) - View Engine usada para transportar dados do back-end para o front-end
* [MySQL](https://mysql.com) - Banco de dados relacional

---
⌨️ com ❤️ por [Cristiano Lima](https://cristianolimaribeiro.github.io/portfolio/) 😊