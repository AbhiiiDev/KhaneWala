const express=require('express');

const router=express.Router()

const User=require("../models/User")

const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const { Await } = require('react-router-dom');

const jwtSecret="heythisisjwtsecretnoonecanbreakthis"

router.post("/createUser",async(req,res)=>{

    const salt=await bcrypt.genSalt(10);
    let secPass=await bcrypt.hash(req.body.password,salt);

    try {
     await  User.create({
           name:req.body.name,
           password:secPass,
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
console.log(userData)
  const pwCompare= await bcrypt.compare(req.body.password,userData.password);
 if(!pwCompare)
 {
    return res.status(400).json({
        errors:"Enter correct credentials"
    })
 }
//it is mandatory for data to be object to get signed with jwt
const data={
    user:{
        id:userData.id
    }
}

const authToken=jwt.sign(data,jwtSecret)
return res.json({
    success:true,
    authToken:authToken
})
    } catch (error) {
        console.log(error)
        res.json({success:false});
    }
})



module.exports=router;