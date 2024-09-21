const express = require('express');
const router = express.Router();
const Instituicao = require('../models/Instituicao'); // Certifique-se de que o caminho esteja correto

// Rota de busca
router.get('/', async (req, res) => {
    const { filtro, query } = req.query;
    
    let searchCondition = {};

    if (filtro === 'nome') {
        searchCondition = { nome: { $regex: query, $options: 'i' } }; // Busca por nome
    } else if (filtro === 'localizacao') {
        searchCondition = { localizacao: { $regex: query, $options: 'i' } }; // Busca por localização
    }

    try {
        const instituicoes = await Instituicao.find(searchCondition);

        // Verifica se encontrou resultados
        if (instituicoes.length === 0) {
            res.render('doador', { instituicoes: [], mensagem: 'Nenhuma instituição encontrada.' });
        } else {
            res.render('doador', { instituicoes, mensagem: null });
        }
    } catch (error) {
        console.error('Erro ao buscar instituições:', error);
        res.status(500).send('Erro ao realizar a busca.');
    }
});

module.exports = router;
