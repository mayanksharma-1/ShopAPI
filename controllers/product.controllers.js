// TODO: Make the controllers for the CURD operations from the code in index.js

const Product = require('../models/product.model.js');


const getProducts = async(req,res)=>{
    try {
        const products = await Product.find()
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ "message": error.message });
}}

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const products = await Product.findById(id);
        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({ "message": error.message });
    }
}

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({ message: "product not found" });
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "product not found" });
        }
        res.status(200).json({ "product": product, message: "product deleted" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

module.exports = {
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}
