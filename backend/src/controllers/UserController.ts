import User from "../models/User";
import {Request,Response} from 'express'


const createUser =async(req:Request,res:Response)=>{

try {
    const {auth0Id}=req.body;
    const existingUser=await User.findOne({auth0Id});


    if(existingUser)
        {
            return res.status(200).send();
        }

        const newUser=new User(req.body);
        await newUser.save();
        return res.status(201).json({message:'User created Successfully'})
} catch (error) {
    return res.status(400).json({
        error:error,
        message:"problem creating user"
    })
}
}

export default {
    createUser
}