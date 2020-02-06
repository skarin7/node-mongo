const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const product = require('./routes/product.route'); // Imports routes for the products
const mongoManager = require('./services/MongoManager');


mongoose.Promise = global.Promise;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);
let port = 3000;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});