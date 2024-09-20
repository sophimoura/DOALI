// routes/cadastro.js
var express = require('express');
var router = express.Router();
const Instituicao = require('../models/Instituicao');


router.get('/', function(req, res, next) {
    res.render('cadastrar', { title: 'Doali' });
  });

// Rota para cadastro de instituição
router.post('/', async (req, res) => {
  const { nome, email, senha, contato, localizacao, projetoSocial, gerente } = req.body;

  try {
    const novaInstituicao = new Instituicao({ nome, email, senha, contato, localizacao, projetoSocial, gerente });
    await novaInstituicao.save();
    res.redirect('/instituicao'); // Redireciona para página inicial ou de sucesso
  } catch (error) {
    res.status(400).send('Erro ao cadastrar instituição');
  }
});

module.exports = router;
