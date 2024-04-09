const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000

const products_routes = require("./routes/products")



app.get("/", (req, res)=>{
    res.status(200).send("<h2>welocome my son</h2>")
})


app.use("/api/v1/products", products_routes)



app.listen(PORT, ()=>{
    console.log("     ");
    console.log("     ");
    console.log("     ");
    console.log(`server is runnning at http://localhost:${PORT}`);
})