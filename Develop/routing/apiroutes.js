const router=require("express").Router()
const { json } = require("express")
const fs=require("fs")
let database=require("../db/db.json")

router.get("/notes", function(req,res){
    database=JSON.parse(fs.readFileSync("./db/db.json","utf8"))
    res.json(database)
})





module.exports=router