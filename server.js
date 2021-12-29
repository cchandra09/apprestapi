const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//panggil routes
var routes = require('./routes');
routes(app);

const port = 5000;
app.listen(port, () => {
    console.log('Sercer Started on port')
});