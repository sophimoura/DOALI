// models/Instituicao.js
const mongoose = require('mongoose');

const instituicaoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  contato: { type: String, required: true },
  localizacao: { type: String, required: true },
  projetoSocial: { type: String, required: true },
  gerente: { type: String, required: true },
  foto: { type: String, required: true } // Campo para a foto
});

module.exports = mongoose.model('Instituicao', instituicaoSchema);