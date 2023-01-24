const express = require('express');

const {
    handleCreateProduct,
    getAllProducts,
    getProductById,
    deleteProductById,
    updateProductById
} = require('../controllers/product.controller');


const router = express.Router()

router.post('/', handleCreateProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.delete('/:id', deleteProductById);
router.put('/:id', updateProductById);

module.exports = { productRouter: router }