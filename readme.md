# REST API





Building a rest API





1. importing packages
2. express
3. nodemon
4. listening to server
# **Setting up routes **
1. router- controller
2. Routes - is responsible for which path we should follow and where i should reach 
3. Controller :  Is responsible for after reaching what next,perform the task     
**STEPS:**

# step 1 :Two Folder under Project
1. controller
2. routes
![image.png](https://eraser.imgix.net/workspaces/uNGytFAPwNFoO4oofd5F/xkbjZoDlG9bq9Tehow39DTjm0ff2/V8WKbEwfAs6FQw4uCu2AR.png?ixlib=js-3.7.0 "image.png")



# step 2:`﻿` under the route folder in the products.js file
```
const express = require("express");
const router = express.Router();

// import what function you are passing 
const {getAllPrducts,getAllPrductsTesting} = require("../controller/products");
```


```
// avg mehtod
router.get("/all", (req,res)=>{
    res.json({msg: "welcome"})
});

router.get("/testing", (req, res)=>{
    res.json({msg: "Testing"})
});
```
```
// Better method
router.get("/products",getAllPrducts) 
router.get("/productstesting",getAllPrductsTesting)
```
```
// exporting the routes are very important
module.exports = router;
```
# step 2:`﻿` under controller folder in the products.js file
```

// Defing our function 
const  getAllPrducts = async (req, res) => {
    res.json({msg: "all products"})
}
```
```
// Defining our function 
const getAllPrductsTesting = async (req, res)=>{
    res.json({msg: "all products"})
};
```


```
// export this function are very important ﻿ 
module.exports = {
 getAllPrducts,
 getAllPrductsTesting
}﻿ 
```
# step 2:`﻿` under app.js file ( Main Entry point of the app) 
```
// import the routes folder
const products_routes = require("./routes/products")
```
```
// use middlewae to navigate 
app.use("/api/products", products_routes)
```


