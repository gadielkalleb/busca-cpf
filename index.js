const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

// Importe das Rotas
const index = require('./routes/index')
const consultas = require('./routes/cpf')

// Banco de dados
const model = require('./model/index')

//configuração do middleware 
app.use(bodyParser.urlencoded({ extended:true }))
app.use(express.static('public'))

// minha view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// uso das rotas
app.use('/', index)
app.use('/consultas', consultas)

// Sincroniza com banco e depois starta a aplicação 
// para zerar o banco de dados basta colocar dentro de sync() => sync({ force: true })
model.sequelize.sync().then(() => {
  app.listen(port,() => console.log('Aplicação sincronizada com o banco de dados escutando na porta '+port))
})