const express=require('express');

const router=express.Router()

const User=require("../models/User")

router.post("/createUser",async(req,res)=>{


    try {
     await  User.create({
           name:req.body.name,
           password:req.body.password,
           email:req.body.email,
           location:req.body.location,
        })
        res.status(200).json({
            success:true
        })
    } catch (error) {
        console.log(error)
        res.json({success:false});
    }
})

router.post("/loginUser",async(req,res)=>{
let email=req.body.email;

    try {
  let userData= await  User.findOne({ email });

  if(!userData)
  {
    return res.status(400).json({
        errors:"No User registered"
    })
  }
 if(!req.body.password === userData.password)
 {
    return res.status(400).json({
        errors:"Enter correct credentials"
    })
 }
return res.json({
    success:true
})
    } catch (error) {
        console.log(error)
        res.json({success:false});
    }
})



module.exports=router;