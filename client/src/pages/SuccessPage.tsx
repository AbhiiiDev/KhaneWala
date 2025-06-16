import { useAppDispatch } from "@/app/hooks"
import { clearCart } from "@/features/cart/cartSlice";
import { useEffect } from "react"

const SuccessPage = () => {
  const dispatch=useAppDispatch();
  useEffect(()=>{
dispatch(clearCart())
  },[])
  return (
   
  )
}

export default SuccessPage
