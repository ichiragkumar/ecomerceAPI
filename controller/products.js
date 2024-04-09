const  getAllPrducts = async (req, res) => {
    res.json({msg: "all products"})
} 

const getAllPrductsTesting = async (req, res)=>{
    res.json({msg: "all products"})

};

module.exports = {
    getAllPrducts, 
    getAllPrductsTesting
}
