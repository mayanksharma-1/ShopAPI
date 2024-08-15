const express = require("express");
const mongoose = require("mongoose");
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");
const app = express();
require("dotenv").config();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/products", productRoute); // runs all the product api routes on /api/products 


app.listen(3000, 'localhost', () => {
    console.log("server is running on port 3000");
})
app.get('/', (req, res) => {
    res.send("hello this is the response for ur get request");
})


mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log("connected to the database");
    })
    .catch((response) => {
        console.log("connection to the server failed");
        console.error(response);
    })


