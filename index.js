const express = require("express");
const mongoose = require("mongoose");
const Product = require('./models/product.model.js');
const app = express();
require("dotenv").config();


app.use(express.json());

app.listen(3000,'localhost',()=>{
    console.log("server is running on port 3000");
})

app.get('/api/products', async (req,res)=>{
    try {
        const products = await Product.find()
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message":error.message});
    }
})

app.get('/api/product/:id', async (req,res)=>{
    try {
        const {id} = req.params;
        const products = await Product.findById(id);
        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({"message":error.message});
    }
})

app.post('/api/products',async (req,res)=>{
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({message:error.message});
    }
})

app.get('/',(req,res)=>{
    res.send("hello this is the response for ur get request");
})

app.put('/api/product/:id', async (req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if (!product) {
            return res.status(404).json({message:"product not found"});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({message:error.message});
    }
})

app.delete('/api/product/:id',async (req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({message:"product not found"});  
        }
        res.status(200).json({"product":product,message:"product deleted"});
    } catch (error) {
        res.status(500).json({message:error});
    }
})

mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("connected to the database");
})
.catch((response)=>{
    console.log("connection to the server failed");
    console.error(response);
})


