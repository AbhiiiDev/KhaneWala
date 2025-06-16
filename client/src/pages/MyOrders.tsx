import { useGetAllOrder } from "@/api/OrderApi"
import { useEffect } from "react"

const MyOrders = () => {

   const {orders,isLoading} =useGetAllOrder();
    useEffect(()=>{
    },[])
  return (
    <div className="mt-32 min-h-[70vh]">
      All my previous Orders !!
      <div>
{orders?.map((order)=>(
    <div>
        {order.restaurant.restaurantName}
        <div>
            {order.items.map((item)=>(
                <>
                <div>
                    {item.name}
                    </div>
                    <div>
                        {item.quantity}
                        </div>
                </>
            ))}
            </div>
        </div>
))}
      </div>
    </div>
  )
}

export default MyOrders
