import { useAppDispatch } from "@/app/hooks"
import { clearCart } from "@/features/cart/cartSlice";
import { useEffect } from "react"

const SuccessPage = () => {
  const dispatch=useAppDispatch();
  useEffect(()=>{
dispatch(clearCart())
  },[])
  return (
    <div className="min-h-screen flex justify-center items-center">
    <div className=' bg-green-500 rounded-full'>
     !! Order Successfull, Hold tight we are preaparing you order !!
    </div>
    </div>
  )
}

export default SuccessPage
