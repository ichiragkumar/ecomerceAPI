const express = require("express");
const router = express.Router();

const {getAllPrducts,getAllPrductsTesting, createProduct} = require("../controller/products");


router.get("/",getAllPrducts) 
router.get("/productstesting",getAllPrductsTesting) 
router.post("/addproduct",createProduct) 
    


module.exports = router;