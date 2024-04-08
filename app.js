var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs=require('express-handlebars')
var fileUpload=require('express-fileupload')

var userRouter = require('./routes/user');
var adminRouter = require('./routes/admin');
var connectDB=require('./config/connection')
var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine("hbs",hbs.engine({extname:'hbs',defaultLayout:'layout',layoutsDir:__dirname+'/views/layout/',partialsDir:__dirname+'/views/partials/'}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload())
app.use(express.static('public/product-images')); // Serve static files from the 'uploads' folder
//sever connection
connectDB()

  
app.use('/', userRouter);
app.use('/admin', adminRouter);

app.get('/getimage/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = `public/product-images/${filename}`;
  res.sendFile(filePath, { root: '.' });
});

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
