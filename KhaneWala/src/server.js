import App from "./App";

import dotenv from 'dotenv';
import connectDataBase from "./config/database";

dotenv.config({
    path:"KhaneWala/src/config/config.env"
})

//calling data base functions
connectDataBase();

App.listen(process.env.PORT,()=>{
    console.log(`server is listening at the port ${process.env.PORT}`)
})