const process = require('process');
const path = require('path');
require('dotenv').config({path: path.join(__dirname,'../../.env')});

module.exports = {
    development: {
        database: process.env.DATABASE,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        host: process.env.HOST,
        db_port: process.env.DB_PORT,
        port: process.env.PORT,
        privateKey: process.env.privateKey,
    }
}