const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')
const sequelize = new Sequelize('sqlite:./db/cpf.sqlite')
// models é um objeto vazio
const models = {}

// aqui eu faço essa operação sincrona somente para fazer uma especie de esquenta 
// filtrando tudo que for difente de index.js e passando somente os meus outros model que estão no diretorio
// assim posso usar ES6 destructing, passando somente as dependencias 
fs
  .readdirSync(__dirname)
  .filter((file) => file !== 'index.js')
  .forEach((file) => {
    console.log(path.join(__dirname, file))
    const model = sequelize.import(path.join(__dirname, file))
    models[model.name] = model
  })

module.exports = { 
  sequelize,
  models
}