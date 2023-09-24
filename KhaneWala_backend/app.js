const express =require('express');
const connectDataBase = require('./config/database');
const dotenv =require('dotenv');
const app=express();
const port=5000
const cors=require('cors');

// const corsOptions = {
//     origin: 'http://localhost:5173/', // Replace with your frontend's actual origin
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//   };
  
//   app.use(cors(corsOptions));
  app.use(cors());
  
  

//  app.use((req,res,next)=>{
//      res.setHeader("Access-Control-Allow-Origin","https://localhost:5173");
//      res.header(
//          "Access-Control-Allow-Headers",
//          "Origin, X-Requested-With, Content-Type, Accept"
//      );
//      next();
//  })


app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello bebes, everything is working fine")
})

app.get('/')

connectDataBase();

app.use("/api",require('./routes/createUser'))
app.use("/api",require('./routes/displayData'))
app.use("/api",require('./routes/orderData'))

app.listen(port,()=>{
    console.log(`server is listening at port:${port}`)
})


module.exports=app;