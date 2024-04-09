const mongoose = require("mongoose")


const connectDB = (db_url)=>{
    console.log("db connected");

    return mongoose.connect(db_url)
}

module.exports = connectDB