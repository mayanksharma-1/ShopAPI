const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("connected to the database");
})
.catch((response)=>{
    console.log("connection to the server failed");
    console.error(response);
})

app.listen(3000,'localhost',()=>{
    console.log("server is running on port 3000");
})

app.get('/',(req,res)=>{
    res.send("hello this is the response for ur get request");
})

