const express = require("express");
const router = express.Router();

const {getAllPrducts,getAllPrductsTesting} = require("../controller/products");


router.get("/",getAllPrducts) 
router.get("/productstesting",getAllPrductsTesting) 



module.exports = router;