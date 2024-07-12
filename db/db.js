const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host : 'localhost',
    user : process.env.USER,
    password : process.env.PASS,
    database : process.env.DB
});

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to the database: ', err);
        return;
    };
    console.log('Connected to database');

});

module.exports = connection;