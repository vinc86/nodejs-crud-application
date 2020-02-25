const Product = require('../models/product.model');

exports.test = function(req,res){
    res.send('Controller test...');
};



//controllers/product.js

exports.product_create = function(req,res){
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save((err)=>{
        if(err) throw err;
        res.send('Product created');
    })
};