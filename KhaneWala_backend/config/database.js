const mongoose=require('mongoose');
require('dotenv').config();
const MONGO_URI="mongodb://127.0.0.1:27017/khaneWala"
const connectDataBase=()=>{
    mongoose.connect(MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    
    }).then(
        (data)=>{
            console.log(`mongodb connected succesfully with server : ${data.connect.host}`)
        }
    ).catch(error=>{console.log("database conncection error:",error)})
}
module.exports=connectDataBase