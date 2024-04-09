const Product = require("../models/product")
const  getAllPrducts = async (req, res) => {
    res.json({msg: "all products"})
} 

const getAllPrductsTesting = async (req, res)=>{
    res.json({msg: "all products"})

};

const createProduct = async (req, res)=>{
    console.log("i am here ... ");

    await Product.create({
        name: req.body.name,
        price: req.body.price,
        featured: req.body.featured,
        rating: req.body.rating,
        createdAt: req.body.createdAt,
        company: req.body.company
    })
    console.log("i am done , check now ");

    res.status(201).json({
        msg: "Product created"
    })

}
module.exports = {
    getAllPrducts, 
    getAllPrductsTesting,
    createProduct
}
