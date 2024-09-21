// routes/cadastro.js
var express = require('express');
const multer = require('multer');
var router = express.Router();
const Instituicao = require('../models/Instituicao');

// Configuração do multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Pasta onde as imagens serão salvas
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Nome do arquivo
    }
});


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
