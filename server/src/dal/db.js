const mongoose = require('mongoose');

const initDB = (config) => {
    if (config.useDocker) {
        mongoose.connect(config.db, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        mongoose.connection.on('connected', () => {
            console.log('Connected to mongo instance');
        });

        mongoose.connection.on('error', (error) => {
            console.log('Error connecting to mongo.', error);
        });
    }
    
};

module.exports = initDB;