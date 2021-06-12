const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/nodejs_blog', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('Connected successfully!!!');
    } catch (error) {
        console.log('Connected failure!!!');
    }
}

module.exports = { connect };
