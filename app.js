const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');


const app = express();
app.use(helmet());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

// load the presidents data and create fake db
const presidentsData = require('./data/presidents.json');

app.set('db', {
  presidents: {
    all: () => presidentsData,
    get: id => presidentsData.find(president => president.number == id),
  },
});

// routing here
app.use('/api', require('./routes/api'));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = Error(`URL: ${req.url} not found`);
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res /* , next */) => {
  console.log('Error handler:', err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
