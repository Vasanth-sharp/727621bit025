const express=require("express")
const route=express.Router()
const {productByCategory, productsByRange, companyProduct, fetchingToken}=require("./controller")

route.get("/token",fetchingToken)
route.get("/company/:companyname/category/:categoryname",companyProduct)
route.get("/categories/:categoryname/products/:n",productByCategory)
route.post("/categoriesByRange/:categoryname/products/:n",productsByRange)//http://localhost:4000/categoriesByRange/Laptop/products/10
module.exports=route