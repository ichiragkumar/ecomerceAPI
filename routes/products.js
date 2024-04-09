const express = require("express");
const router = express.Router();

const {getAllPrducts,getAllPrductsTesting} = require("../controller/products");

router.get("/all", (req,res)=>{
    res.json({msg: "welcome"})
});
router.get("/testing", (req, res)=>{
    res.json({msg: "Testing"})
});


router.get("/products",getAllPrducts) 
router.get("/productstesting",getAllPrductsTesting) 



module.exports = router;