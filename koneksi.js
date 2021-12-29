var mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_rest_api'
});

conn.connect((err) => {
    if(err) throw err;
    console.log('Mysql Terkoneksi');
});

module.exports = conn;