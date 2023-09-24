
const express=require('express')

const router=express.Router();
const orders=require('../models/order')


router.post('/orderData',async(req,res)=>{
    let data=[];
     data=req.body.order_data;
    await data.splice(0,0,{Order_date:req.body.order_date})

    //if email already registerd , then findOneandUpate else create

    let eId=await orders.findOne({'email':req.body.email})

    console.log(eId);

    //condn to check new user or previous

    if(eId===null)
    {
try {
    await orders.create({
        email:req.body.email,
        order_data:[data],
    }).then((order_data)=>{
    res.json({success:true
   })
   console.log(order_data);
    })
} catch (error) {
    console.log(error.message)
    res.status(400).send(error);
}
    }
    else 
    {
        try{

        
await Order.findOneAndUpdate({
    email:req.body.email
},
//code to append data in prev order data
{$push:{order_data:data}}
).then(()=>{
    res.json({success:true})
})}
catch(error){
    res.send( "Servor error",error.message);
}
    }
})
module.exports=router;