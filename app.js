const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000

app.get("/", (req,res)=>{
    res.send("Welcome to Ecomerce API")
})



app.listen(PORT, ()=>{
    console.log(`server is runnning at http://localhost:${PORT}`);
})