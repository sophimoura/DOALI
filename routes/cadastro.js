var express = require('express');
var router = express.Router();
const Instituicao = require('../models/Instituicao');

// Rota para exibir a página de cadastro
router.get('/', function(req, res, next) {
    res.render('cadastrar', { title: 'Doali' });
});

// Rota para cadastro de instituição
// Rota para cadastro de instituição
router.post('/', async (req, res) => {
  const { nome, email, senha, contato, localizacao, projetoSocial, gerente, foto } = req.body; 

  try {
    const novaInstituicao = new Instituicao({ 
      nome, 
      email, 
      senha, 
      contato, 
      localizacao, 
      projetoSocial, 
      gerente, 
      foto 
    });
    
    await novaInstituicao.save();
    
    // Redireciona para a página de instituição com o parâmetro de sucesso
    res.redirect('/instituicao?success=true');
  } catch (error) {
    res.status(400).send('Erro ao cadastrar instituição');
  }
});

module.exports = router;
