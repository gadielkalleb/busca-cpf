const express = require('express')
const router = express.Router()
const model = require('../model/index')
const statusController = require('../controller/status')

// injeto minha dependencia usando bind()
// facilitando se for usar testes automatizados
router.get('/', statusController.totalBlackList.bind(null, model.models))
router.get('/search/v1', statusController.v1Cpf.bind(null, model.models))
router.get('/search', statusController.cpf.bind(null, model.models))

module.exports =  router 