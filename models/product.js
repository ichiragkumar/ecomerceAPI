const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
    name: {
        type : String,
        required:[true, "Name should be provided"],
    },
    price :{
        type:Number,
        required:[true, "Price must be provided"],

    },

    featured :{
        type : Boolean,
        default :false,
    },

    rating:{
        type:Number,
        default: 4.9,
        required:[true, "Rating  must be provided"],

    },


    createdAt:{
        type: Date,
        default :Date.now()
    },

    company :{
        type :String,
        enum:{
            values:["apple", "samsung", "dell", "mi"],
            message: `{VALUE} is not supported`,
        }


    }

})


// now add this in my Databse collection 
// creae new collection 


module.exports = mongoose.model("Product", productSchema)