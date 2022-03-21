const express = require('express');
const router = express.Router();

//Controller
const QuartoController = require('../controllers/QuartoControllers.js');

//Rotas

//Rota deve criar um novo quarto
router.post('/create', QuartoController.create);

//Rota deve listar todos os quartos
router.get('/', QuartoController.showAll);

//Rota deve listar um quarto baseado em seu ID
router.get('/:id', QuartoController.showById);

//Rota deve deletar um quarto baseado em seu ID
router.delete('/:id', QuartoController.deleteById);

//Rota deve atualizar um quarto baseado em seu ID
router.patch('/:id', QuartoController.updateById);

module.exports = router;