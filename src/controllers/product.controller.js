
const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {

    //1. find() and Fiter combo
    Product.find().sort({ 'price': 1 }).limit(1).exec(function (err, docs) {
        console.log('Find and filter: docs' + docs);

    });

    //2. all queries in  in find 
    Product.find({}, { 'name': 'myName' }, { 'price': -1 }, function (err, docs) {
        console.log('All in find() : docs' + docs);

    });

    var query = Product.find().where('name').
        equals('Egg').where('price').gt('15').limit(2).select('name price');

    query.exec(function (err, docs) {
        console.log('Query executed data' + docs);
    });

    Product.find({}, function (err, resp) {
        if (err) {
            console.log('Error fetching data ', err);
        }
        modifiedResp = [];
        resp.map(p => p.toJSON()).forEach(function (doc) {
            delete doc._id;
            delete doc.__v;
            modifiedResp.push(doc);
        });
        res.json(modifiedResp);
    });
    // res.send('Greetings from the Test controller!');
};

exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err)
            return res.json(
                {
                    'status': 'error',
                    'errMessage': 'Erro saving prduct details'
                });
        console.info('Retrieved data successfully');
        res.send(product);
    });
}

exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return res.json(
                {
                    'status': 'error',
                    'errMessage': 'Erro saving prduct details'
                });
        }
        console.info('Product created successfully');
        res.send('Product Created successfully');
    });
};