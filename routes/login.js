// routes/login.js
var express = require('express');
var router = express.Router();
const Instituicao = require('../models/Instituicao');

router.get('/', function(req, res, next) {
    res.render('login', { title: 'Doali' });
  });
// Rota para login de instituição
router.post('/', async (req, res) => {
    const { email, senha } = req.body;
  
    try {
      console.log(`Tentativa de login com email: ${email}`); // Log do email
      const instituicao = await Instituicao.findOne({ email });
      
      if (!instituicao) {
        console.log('Email não encontrado'); // Log se o email não foi encontrado
        return res.status(401).send('Credenciais inválidas');
      }
  
      console.log(`Instituição encontrada: ${instituicao}`); // Log da instituição encontrada
  
      if (instituicao.senha !== senha) {
        console.log('Senha incorreta'); // Log se a senha estiver errada
        return res.status(401).send('Credenciais inválidas');
      }
  
      req.session.instituicaoId = instituicao._id;
      res.redirect(`/instituicao/${instituicao._id}`);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao fazer login');
    }
  });

module.exports = router;
