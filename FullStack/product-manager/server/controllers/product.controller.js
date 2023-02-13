const { Product } = require('../models/product.model');

const handleCreateProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        return res.json(newProduct);
    } catch (err) {
        return res.status(400).json(err);
    }
}

const getAllProducts = async (req, res) => {
    const products = await Product.find();
    return res.json(products);
}

const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id)
    return res.json(product);
}

const deleteProductById = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id)
        return res.json(deletedProduct);
    } catch (err) {
        return res.status(400).json(err);
    }
}

const updateProductById = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
            // re-run our validaitons
            runValidators: true,
        })
        return res.json(updatedProduct);
    } catch (error) {
        return res.status(400).json(error);
    }
}

module.exports = {
    handleCreateProduct,
    getAllProducts,
    getProductById,
    deleteProductById,
    updateProductById
}