import { useGetOrder } from "@/api/OrderApi";
import { useEffect } from "react";
import { useParams } from "react-router-dom"

const OrderSummaryPage = () => {
    const {orderId}=useParams();
        const {order}=useGetOrder(orderId);
    useEffect(()=>{
    },[])
  return (
    <div>
       <div className="min-h-screen flex justify-center items-center">
    <div className=' text-green-500 rounded-full'>
     !! Order Successfull, Hold tight we are preaparing you order !!
    </div>
    <div>
{order?.restaurant.restaurantName}
    </div>
    <div>
{order?.items.map((item)=>(
  <div>
    {item.name}
    <div>
      {item.quantity}
      </div>
    </div>
))}
    </div>
    </div>
    </div>
  )
}

export default OrderSummaryPage
