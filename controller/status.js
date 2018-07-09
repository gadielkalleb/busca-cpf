const model = require('../model/index')
const nodeCpf = require('node-cpf')

// variavel que auxiliar que faz a contagem de buscas no campo de pesquisa do cpf
// toda vez que resetar o servidor ela zera novamente
const contador = {
  request: 0
}

// busca o cpf no campo de pesquisa
exports.cpf = async ({ Cpf }, req, res) => {
  contador.request++
  const cpf = await Cpf.findOne({
    where: { numero: req.query.cpf }
  })
  res.render('consultas/searchOne', {
    title: 'Pesquisa',
    cpf: cpf,
  })
}

// variavel que retorna um json qdo acessada no endpoint
exports.v1Cpf = async ({ Cpf }, req, res) => {
  const cpf = await Cpf.findOne({
    where: { numero: nodeCpf.mask(req.query.cpf)}
  })
  res.send({
    cpf: {
      numero: cpf.numero,
      status: cpf.tipo
    }
  })  
}

// mostra qtos cpf estão na blackList e qtos requests de pesquisa foram feitos
exports.totalBlackList =  async ({ Cpf }, req, res) => {
  const total = await Cpf.findAll({
    attributes: ['tipo', [model.sequelize.fn('count', model.sequelize.col('tipo')), 'total']],
    group: ['tipo']
  })
  res.render('home',{
    title: 'bem vindo ao sistema de consulta de cpf',
    contador: total[0].dataValues.total,
    request: contador.request
  })
}