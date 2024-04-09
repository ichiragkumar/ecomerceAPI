const Product = require("../models/product")


const  getAllPrducts = async (req, res) => {
    try {
        
        const products = await Product.find();
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
        // return only selected field



    
        const { company, name, featured, sort, select,price } = req.query;
        const queryObject = {}
        if(company){
               queryObject.company = company
               console.log(queryObject.company)
        }
        if(name){
            queryObject.name = {$regex :  name, $options: "i"}
            console.log(queryObject.name)
        }
        let apiData = Product.find(queryObject);

        if (sort) {
          let sortFix = sort.split(",").join(" ");
          apiData = apiData.sort(sortFix);
        }
      
        // (select = name company;
        if (select) {
        //   let selectFix = select.replace(",", " ");
          let selectFix = select.split(",").join(" ");
          apiData = apiData.select(selectFix);
        }


        console.log(queryObject);
        const myData = await apiData
        res.status(200).json({myData})

        // const products = await Product.find(queryObject);


        // search both end and if whatever it's true 
        // const {company, name} = req.query
        // const queryObject = {}
        // if(company){
        //        queryObject.company = company
        //        console.log(queryObject.company)
        // }
        // if(name){
        //     queryObject.name = name
        //     console.log(queryObject.name)
        // }
        // console.log(queryObject);
        // const products = await Product.find(queryObject);




        // // if any part of query parameters is true , then show their result
        // const {company} = req.query
        // const queryObject = {}

        // if(company){
        //     queryObject.company = company
        //     console.log(queryObject.company)
        // }

        // const products = await Product.find(queryObject);


        // search through query parameter
        // const search = req.query
        // const products = await Product.find(search);


    
        // res.status(200).json({ products});
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
