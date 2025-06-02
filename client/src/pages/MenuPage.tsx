import { useGetRestaurant } from "@/api/RestaurantSearchApi";
import { LoadingState } from "@/components/Loader";
import { useParams } from "react-router-dom"
import { Card } from "@/components/ui/card";
import { IndianRupee, WatchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { addToCart, setRestaurant } from "@/features/cart/cartSlice";
export const MenuPage=()=>
{
    const items=useAppSelector(state=>state.cart.items);
    const dispatch=useAppDispatch();
    const {restaurantId}=useParams();
    const {restaurant,isLoading}= useGetRestaurant(restaurantId);
    console.log(restaurant);
    if(isLoading)
        return <LoadingState/>

   
return(
    <>
    <div className="mt-32 flex justify-center">
        <Card className="w-3/2 p-4 flex gap-4">
    <p className="text-3xl font-semibold">{restaurant?.restaurantName}</p>
    <div>
    <p className="text-sm font-semibold flex items-center">
       <IndianRupee color="green" size={17}/>{restaurant?.deliveryPrice}/Person</p>
    
    <p className="text-sm font-semibold flex items-center">
       <WatchIcon color="green" className="size-4"/> {restaurant?.estimatedDeliveryTime}mins</p>

    </div>
        </Card>
    </div>

    <div className="mt-4">
      <p className="text-center text-xl font-semibold italic text-orange-400">  Menu</p>
      <div className="mt-4 w-full p-2 sm:flex flex-col items-center gap-2 sm:justify-center">
       {
restaurant?.menuItems.map((item)=>{
    const handleAddtoCart=()=>{
        dispatch(setRestaurant(restaurantId));
        dispatch(addToCart(item))
    }
    return (
        <Card className="w-[30%] h-32">
    <div className="flex-col p-4 text-base font-semibold w-52">
    <p className="text-gray-600">{item.name}</p>
    <p className="flex items-center"> <IndianRupee color="green" size={17}/> {item.price}</p>
    </div>
    <div className="flex justify-center ">
    <Button variant="outline" className="w-1/4 text-orange-500 font-bold text-lg" onClick={handleAddtoCart}>Add</Button>
    </div>
    </Card>
    )
})
       }
       </div>
    </div>
    </>
)
}