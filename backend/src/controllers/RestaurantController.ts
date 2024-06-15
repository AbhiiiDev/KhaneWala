import Restaurant from "../models/Restaurant";
import cloudinary from 'cloudinary';
import {Request,Response} from 'express';
import mongoose from "mongoose";

const createRestaurant=async(req:Request,res:Response)=>{

try {
    const existingRestaurant=await Restaurant.findOne({user:req.userId});

    if(existingRestaurant)
        {
            return res.status(409).json({message:"Restaurant already exists"});
        }

        const imageUrl=await uploadImage(req.file as Express.Multer.File);
        
        const restaurant=new Restaurant(req.body);
        restaurant.imageUrl=imageUrl;
        restaurant.user= new mongoose.Types.ObjectId(req.userId);
        restaurant.lastUpdated=new Date();

        await restaurant.save();

        res.status(201).send(restaurant);

} catch (error) {
    return res.status(400).json({
        error:error,
        message:"problem creating Restaurant"
    })
}

}


const uploadImage = async (file: Express.Multer.File) => {
    const image = file;
    const base64Image = Buffer.from(image.buffer).toString("base64");
    const dataURI = `data:${image.mimetype};base64,${base64Image}`;

    const uploadResponse=await cloudinary.v2.uploader.upload(dataURI);

    return uploadResponse.url;
  };

export {
    createRestaurant
}