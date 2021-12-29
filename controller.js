'use strict';

var response = require('./res');

var connection = require('./koneksi');
exports.index = function(req, res){
    response.ok('rest api aplication running', res);
}

//menampilkan semua data mahasiswa
exports.showAllDataMahasiswa = function(req, res) {
    connection.query("SELECT * FROM mahasiswa", function(err, rows, fields) {
        if(err){
            connection.log(err);
        }else{
            response.ok(rows, res);
        }
    });
}
