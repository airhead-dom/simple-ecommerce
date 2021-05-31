// require('dotenv').config();
const server = require('./server');
const database = require('./database');

const databaseUrl = process.env.DATABASE_HOST;
const _database = new database(databaseUrl);

const port = process.env.PORT || 5000;
const _server = new server({ port });

const startApp = async () => {
    await _database.start();
    await _server.start();
}

startApp().then();
