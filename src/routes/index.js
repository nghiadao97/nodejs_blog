const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');

function route(app) {
    // Me
    app.use('/me', meRouter);

    // News
    app.use('/news', newsRouter);

    // Courses
    app.use('/courses', coursesRouter);

    // Home
    app.use('/', siteRouter);
}

module.exports = route;
