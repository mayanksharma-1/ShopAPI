const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.listen(3000,'localhost',()=>{
    console.log("server is running on port 3000");
})

app.post('/api/products',(req,res)=>{
    res.send(`got your request: ${req.body} this is my response back`);
})

app.get('/',(req,res)=>{
    res.send("hello this is the response for ur get request");
})

mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("connected to the database");
})
.catch((response)=>{
    console.log("connection to the server failed");
    console.error(response);
})


