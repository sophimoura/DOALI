var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var doacoesRouter = require('./routes/doacoes');
var sounovoRouter = require('./routes/sounovo');
var doadorRouter= require('./routes/doador');
var instituicaoRouter = require('./routes/instituicao');
var receptorRouter = require('./routes/receptor');
var cadastroRouter = require('./routes/cadastro');
var loginRouter = require('./routes/login');
var gerenciamentoRouter = require('./routes/gerenciamento');
var buscarRouter = require('./routes/buscar');

var connectDB = require('./db'); // Importa o arquivo de conexão com o Mongo
connectDB(); // Chama a função de conexão




var app = express();

// Configuração do middleware de sessão
app.use(session({
  secret: 'hahaha', // Altere para um segredo forte
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Para desenvolvimento, defina como false
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/doacoes', doacoesRouter);
app.use('/sounovo', sounovoRouter);
app.use('/doador', doadorRouter);
app.use('/instituicao',instituicaoRouter);
app.use('/receptor',receptorRouter);
app.use('/cadastrar', cadastroRouter);
app.use('/login', loginRouter);
app.use('/instituicao', gerenciamentoRouter);
app.use('/buscar', buscarRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
