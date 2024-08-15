//TODO: router.method('/' or '/:id',controller)
const express = require('express');
const router = express.Router();
const product = require('../models/product.model.js');
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controllers.js');
router.get('/',getProducts);
router.get('/:id',getProduct);
router.post('/',createProduct);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct);

module.exports = router;