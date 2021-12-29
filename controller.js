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
            console.log(err);
        }else{
            response.ok(rows, res);
        }
    });
}


//Menampilkan Data Berdasarkan ID
exports.showBaseOnId = function(req, res){
    let id = req.params.id;

    console.log(id);
    connection.query("SELECT * FROM mahasiswa WHERE id_mahasiswa = ?", [id],
        function(err, rows, field){
            if(err){
                console.log(err)
            }else{
                response.ok(rows, res)
            }
        }
    )
}

//Create Data Mahasiswa
exports.addMahasiswa = function(req, res){
    let nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;
    console.log(nim);
    connection.query('INSERT INTO mahasiswa (nim,nama,jurusan) VALUES(?,?,?)',
        [nim, nama, jurusan],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
}