const express = require('express');
const router = express.Router();
const path = require('path');
//require controller

const productController = require('../controllers/product.controller');

// a simple test url to check that all of our files are communicating correctly.

router.get('/test', productController.test);
router.post('/create', productController.product_create);

router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname , "../views/insert.html"))
})

module.exports = router;