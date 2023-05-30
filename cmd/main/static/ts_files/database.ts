import mysql from 'mysql';

var pool = mysql.createPool({
    host: '127.0.0.1:3306',
    user: 'root',
    password: 'MySqLt3sT25#',
    database: 'hospital',
});

export {pool};