const express = require('express')
const router = express.Router();
const Product = require('../models/product.model.js')
const {getProducts,getProduct,createProduct,updateProducts,deleteProduct} = require('../controller/product.controller.js')


router.get('/',getProducts)

router.post('/',createProduct)
router.get('/:id', getProduct)
router.put('/:id',updateProducts)
router.delete('/:id',deleteProduct)

module.exports =router