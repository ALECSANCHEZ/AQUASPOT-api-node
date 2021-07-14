const mysql = require('mysql2/promise');
const {database} = require('../config.js');

const mySQL_DB = mysql.createConnection({
        host: database.host,
        user: database.username,
        password: database.password,
        database: database.database
});
   
module.exports = mySQL_DB;