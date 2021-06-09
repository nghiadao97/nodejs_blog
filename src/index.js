const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
); // Gửi theo dạng form HTML
app.use(express.json()); // Gửi từ code javascript lên server

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource\\views'));

// Routes init
route(app);

  app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
  });
