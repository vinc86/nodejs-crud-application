const express = require('express');
const router = express.Router();

//require controller

const productController = require('../controllers/product.controller');

// a simple test url to check that all of our files are communicating correctly.

router.get('/test', productController.test);

router.post('/create', product_controller.product_create);

module.exports = router;