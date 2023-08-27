const express=require('express')
const { route } = require('./createUser')
const router=express.Router()


router.post('/foodData',(req,res)=>{
    try {
      res.send([global.foodItem,global.foodCategory])  
    } catch (error) {
        console.error(error.message);
        res.send("server Error");
    }
})

module.exports=router;