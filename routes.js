'use strict';

module.exports = function(app) {
    var myJson = require('./controller');
    app.route('/')
        .get(myJson.index);

    app.route('/show')
        .get(myJson.showAllDataMahasiswa)

    app.route('/show/:id')
        .get(myJson.showBaseOnId)

    app.route('/create')
        .post(myJson.addMahasiswa)

    app.route('/update/:id')
        .put(myJson.updateMahasiswa)

    app.route('/delete/:id')
        .delete(myJson.deleteMahasiswa)

    app.route('/show-matakuliah')
        .get(myJson.showGroupMatakuliah)
}
