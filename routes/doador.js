const express = require('express');
const router = express.Router();
const Instituicao = require('../models/Instituicao'); // Ajuste o caminho conforme sua estrutura

// Rota para a página do doador
router.get('/', async (req, res) => {
    try {
        const instituicoes = await Instituicao.find(); // Busca todas as instituições
        res.render('doador', { instituicoes }); // Renderiza a página com as instituições
    } catch (error) {
        console.error('Erro ao buscar instituições:', error);
        res.status(500).send('Erro ao buscar instituições');
    }
});

// Se quiser uma rota padrão, pode ser a página inicial
router.get('/', (req, res) => {
    res.redirect('/doador'); // Redireciona para a página do doador
});

module.exports = router;
