const Sequelize = require('sequelize')
const connection = require('./database')

const Respostas = connection.define('respostas',{
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    questionId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Respostas.sync({force: false})

module.exports = Respostas