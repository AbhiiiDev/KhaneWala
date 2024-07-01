import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose,{ConnectOptions} from "mongoose";
import UserRoute from './routes/UserRoute';
import RestaurantRoute from "./routes/RestaurantRoute";
import {v2 as cloudinary} from 'cloudinary'


const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI as string).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

cloudinary.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key:process.env.CLOUD_API_KEY,
  api_secret:process.env.CLOUD_API_SECRET
});


app.get("/test", (req, res) => {  
  res.json({
    message: "test server working fine",
  });
});

app.use('/api/v1/user',UserRoute);
app.use('/api/v1/restaurant',RestaurantRoute)



app.listen(8000, () => {
  console.log("server working fine on PORT: 8000");
});
