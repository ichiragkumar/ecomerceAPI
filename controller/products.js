const Product = require("../models/product")


const  getAllPrducts = async (req, res) => {
    try {
        const products = await Product.find({products});
        // const products = await Product.find({name: "watch"});
        res.status(200).json(products);
        } catch (error){
            res.status(500).json(
                { error: 'Internal server error' }
        );
    }
    
} 

const getAllPrductsTesting = async (req, res)=>{
    try {
        const products = await Product.find();
        res.status(200).json({products});
        } catch (error){
            res.status(500).json(
                { error: 'Internal server error' }
        );
    }

};

const createProduct = async (req, res)=>{
    console.log("i  will create a new product in Database ");

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
