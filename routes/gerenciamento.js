// routes/gerenciamento.js
var express = require('express');
var router = express.Router();
const Instituicao = require('../models/Instituicao');

// Exibir informações da instituição
router.get('/:id', async (req, res) => {
  try {
    const instituicao = await Instituicao.findById(req.params.id);
    if (instituicao) {
      res.render('instituicao-detalhes', { instituicao });
    } else {
      res.status(404).send('Instituição não encontrada');
    }
  } catch (error) {
    res.status(400).send('Erro ao buscar instituição');
  }
});

// Editar informações da instituição
router.post('/editar/:id', async (req, res) => {
  const { nome, email, contato, localizacao, projetoSocial, gerente } = req.body;

  try {
    await Instituicao.findByIdAndUpdate(req.params.id, { nome, email, contato, localizacao, projetoSocial, gerente });
    res.redirect(`/instituicao/${req.params.id}`);
  } catch (error) {
    res.status(400).send('Erro ao editar instituição');
  }
});

// Excluir instituição
router.post('/excluir/:id', async (req, res) => {
  try {
    await Instituicao.findByIdAndDelete(req.params.id);
    res.redirect('/onde-doar'); // Redireciona para a página de instituições
  } catch (error) {
    res.status(400).send('Erro ao excluir instituição');
  }
});

module.exports = router;
