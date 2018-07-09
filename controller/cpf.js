const model = require('../model/index')
const nodeCpf = require('node-cpf')

// aqui temos todo o processo de crud da aplicação

// retorna o formulario para cadastro do cpf
exports.createForm = (req, res) => res.render('consultas/create', { title: 'cadastre um novo cpf' })

// retorna a whitelist
exports.whiteList = async ({ Cpf }, req, res) => {
  const cpfFree = await Cpf.findAll({
    where: { tipo: "Free" }
  })
  res.render('consultas/whitelist', {
    title: 'Lista de cpf',
    cpfs: cpfFree
  })
}

// retorna a blacklist
exports.blackList = async ({ Cpf }, req, res) => {
  const cpfBlock = await Cpf.findAll({
    where: { tipo: "Block" }
  })
  res.render('consultas/blacklist', {
    title: 'Lista Negra de cpf',
    cpfs: cpfBlock
  })
}

// metodo POST, envia os dados para o banco de dados
exports.createProcess = async ({ Cpf }, req, res) => {
  await Cpf.create({
    numero: nodeCpf.mask(req.body.numero),
    tipo: req.body.tipo
  })
  res.redirect('/')
}

// deleta o cpf do bando de dados
exports.deleteOne = async ({ Cpf }, req, res) => {
  await Cpf.destroy({
    where: { id: req.params.id }
  })
  res.redirect('back')
}

// retorna o formulario para edição do cpf
exports.editForm = async ({ Cpf }, req, res) => {
  const cpf = await Cpf.findById(req.params.id)
  res.render('consultas/edit', {
    title: 'Atualizar cadastro',
    cpf: cpf
  })
}

// metodo POST, atualiza os dados do bando 
exports.editProcess = async ({ Cpf }, req, res) => {
  await Cpf.update(req.body, {
    where: { id: req.params.id }
  })
  res.redirect('/')
}
