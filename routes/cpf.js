const express = require('express')
const model = require('../model/index')
const cpfController = require('../controller/cpf')
const router = express.Router()

// injeto minha dependencia usando bind()
// facilitando se for usar testes automatizados
router.get('/whitelist', cpfController.whiteList.bind(null, model.models))
router.get('/blacklist', cpfController.blackList.bind(null, model.models))
router.get('/create', cpfController.createForm)
router.post('/create', cpfController.createProcess.bind(null, model.models))
router.get('/delete/:id', cpfController.deleteOne.bind(null, model.models))
router.post('/update/:id', cpfController.editProcess.bind(null, model.models))
router.get('/update/:id', cpfController.editForm.bind(null, model.models))

module.exports = router