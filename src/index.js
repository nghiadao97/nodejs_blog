const path = require('path');
const express = require('express');
const morgan = require('morgan');
var methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');
// Import MongoDB
const db = require('./config/db');
// Connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
); // Gửi theo dạng form HTML
app.use(express.json()); // Gửi từ code javascript lên server

app.use(methodOverride('_method'));

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
