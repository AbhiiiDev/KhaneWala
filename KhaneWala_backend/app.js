const express =require('express');
const connectDataBase = require('./config/database');
const dotenv =require('dotenv')
const app=express();
const port=5000

app.get("/",(req,res)=>{
    res.send("hello bebes, everything is working fine")
})

// dotenv.config({
//     path:"khaneWala_backend/config/config.env"
// })

connectDataBase();

app.listen(port,()=>{
    console.log(`server is listening at port:${port}`)
})


module.exports=app;