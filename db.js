// db.js
const mongoose = require('mongoose');

// Substitua pela sua string de conexão do MongoDB Atlas
const dbURI = 'mongodb+srv://sophiamoura43:suap1234@cluster0.ttfpl.mongodb.net/DOALI';

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Conectado ao MongoDB');
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err);
    process.exit(1);
  }
};

module.exports = connectDB;