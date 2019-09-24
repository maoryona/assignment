const path = require('path');
const rootPath = path.normalize(__dirname);
require('dotenv/config');
const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        root: `${rootPath}/src`,
        app: {
            name: 'k-assignment-dev'
        },
        port: process.env.PORT || 3000,
        db: `${process.env.DB_CONNECTION_STRING}/${process.env.DB_SCHEMA}`,
        secretKey: 'ireotu8grrfetg43%#t3vESRVTSsrjw34#%$#^$%&dfghjuiefds5tREWFTYwbewrtu8w3495',
        useDocker: true,
    },

    test: {
        root: `${rootPath}/src`,
        app: {
            name: 'k-assignment-qa'
        },
        port: process.env.PORT || 3000,
        db: `${process.env.DB_CONNECTION_STRING}/${process.env.DB_SCHEMA}`,
        secretKey: 'ireotu8grrfetg43%#t3vESRVTSsrjw34#%$#^$%&dfghjuiefds5tREWFTYwbewrtu8w3495',
        useDocker: true,
    },

    production: {
        root: `${rootPath}/src`,
        app: {
            name: 'k-assignment-prod'
        },
        port: process.env.PORT || 3000,
        db: `${process.env.DB_CONNECTION_STRING}/${process.env.DB_SCHEMA}`,
        secretKey: 'ireotu8grrfetg43%#t3vESRVTSsrjw34#%$#^$%&dfghjuiefds5tREWFTYwbewrtu8w3495',
        useDocker: true,
    }
};

module.exports = config[env];