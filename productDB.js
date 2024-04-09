
require("dotenv").config()
const express = require("express")
const app = express()
const connectDB = require("./db/connect")
const Product = require("./models/product")
const ProductJson = require("./products.json")



app.listen(process.env.PORT , async ()=>{
    await connectDB(process.env.DATABASE_URL)
    await Product.deleteMany()
    await Product.create(ProductJson)
    console.log("success fully conected");
    console.log("server is running..");
})