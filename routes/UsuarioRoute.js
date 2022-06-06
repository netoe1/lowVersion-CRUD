const express = require('express');
const router =  express.Router();
const UsuarioController = require('../controller/UsuarioController.js');

//abrir tela 
router.get('/add',UsuarioController.abreAdd);
//salva dados
router.post('/add',UsuarioController.addSalva);
//listar tudo
router.get('/lst',UsuarioController.listarTudo);
//listar com filtro
router.post('/lst',UsuarioController.listaComFiltro);
//abrir edita
router.get('/edt',UsuarioController.abreEdt);
//editar dados
router.post('/edt',UsuarioController.salvaEdt);
//deletar dados
router.get('/del',UsuarioController.deletaDado);


module.exports = router;/*IMPORTANTE! exportar módulo. */ 




