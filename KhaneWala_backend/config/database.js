const mongoose=require('mongoose');
require('dotenv').config();
const MONGO_URI="mongodb://127.0.0.1:27017/khaneWala"
const connectDataBase=()=>{
    mongoose.connect(MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    
    }).then(
       async()=>{
            console.log(`mongodb connected succesfully with server `);
            
const db=mongoose.connection.db;
//fetch food_data colletion
const fetched_data = await db.collection("food_Data").find({}).toArray();
global.foodItem=fetched_data;

const foodCategory=await db.collection("foodCategory").find({}).toArray();
global.foodCategory=foodCategory;
// console.log(fetched_data,foodCategory);

        }


    ).catch(error=>{console.log("database conncection error:",error)})
}
module.exports=connectDataBase