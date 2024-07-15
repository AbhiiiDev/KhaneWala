import Restaurant from "../models/Restaurant";
import {v2 as cloudinary} from 'cloudinary'
import {Request,Response} from 'express';
import mongoose from "mongoose";


const getRestaurant=async(req:Request,res:Response)=>{
    try {
        const currentRestaurant=await Restaurant.findOne({
            _id:req.userId
        });
        if(!currentRestaurant)
        {
            return res.status(404).json({message:'Restaurant not found'})
        }

        res.json(currentRestaurant);
    } catch (error) {
        res.status(400).json({message:'Error while finding user'})
    }
}



const createRestaurant=async(req:Request,res:Response)=>{

try {

    if (!req.file) {
        return res.status(400).json({ message: 'File is required' });
    }
 
    const existingRestaurant=await Restaurant.findOne({user:req.userId});
    console.log(existingRestaurant)
    if(existingRestaurant)
        {
            return res.status(409).json({message:"Restaurant already exists"});
        }

        const imageUrl=await uploadImage(req.file as Express.Multer.File);
        console.log(imageUrl)

        
        const restaurant=new Restaurant(req.body);
        console.log(restaurant)

        restaurant.imageUrl=imageUrl;
        restaurant.user= new mongoose.Types.ObjectId(req.userId);
        restaurant.lastUpdated=new Date();

        await restaurant.save();

        // console.log(restaurant)
        res.status(201).send(restaurant);

} catch (error) {
    return res.status(400).json({
     error,
        message:"problem creating Restaurant"
    })
}

}


const uploadImage = async (file: Express.Multer.File) => {
    try {
        const base64Image = Buffer.from(file.buffer).toString("base64");
        const dataURI = `data:${file.mimetype};base64,${base64Image}`;

        const uploadResponse = await cloudinary.uploader.upload(dataURI);
        return uploadResponse.url;
    } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
        throw new Error('Image upload failed');
    }
  };

export {
    createRestaurant,
    getRestaurant
}