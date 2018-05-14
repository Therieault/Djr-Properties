const express = require('express');
const path = require('path');
const logger = require('morgan');
const index = require('./routes/index');
const apply = require('./routes/apply');
const apartments = require('./routes/apartments');
const buildings = require('./routes/buildings');
const comment =require('./routes/comment');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/apply', apply);
app.use('/comment', comment);
app.use('/apartments', apartments);
app.use('/buildings', buildings);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
