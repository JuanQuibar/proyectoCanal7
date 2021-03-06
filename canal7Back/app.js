var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

const dotenv = require("dotenv");
dotenv.config();//antes que las rutas


const {logeado} = require('./middlewares/logged');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// const empleadosRouter = require('./routes/empleados');
const usuariosRouter = require('./routes/usuarios');
const auth = require('./routes/auth');
const perfil = require('./routes/perfil');
const registro = require('./routes/registro');
// const taxistas = require('./routes/taxistas')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/empleados', empleadosRouter);
app.use('/usuarios', usuariosRouter);
app.use('/auth', auth);
app.use('/perfil', logeado, perfil);
app.use('/registro', registro);
// app.use('/taxistas', taxistas);

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
