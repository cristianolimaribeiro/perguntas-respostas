const Sequelize = require('sequelize')

                const connection = new Sequelize('pr', 'root', 'senha', {
                    host: 'localhost',
                    dialect: 'mysql',
                    dialectOptions: { charset: 'utf8' } 
                })

module.exports = connection