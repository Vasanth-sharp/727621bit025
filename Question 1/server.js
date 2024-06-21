const express=require("express")
const cors=require("cors")
const app=express()
const router=require("./router")
app.use(cors())
app.use(express.json())
app.listen(4000,()=>console.log("listening in port`"))
app.use("/",router)
