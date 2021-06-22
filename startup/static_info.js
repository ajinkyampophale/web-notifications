const exphbs = require('express-handlebars'),
    express = require('express');

module.exports = (app) => {

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('./public'));

  app.engine('handlebars', exphbs());
  app.set('view engine', 'handlebars');
}