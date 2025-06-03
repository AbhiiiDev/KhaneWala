import { useAppSelector } from '@/app/hooks'

const CartPage = () => {
    const items=useAppSelector(state=>state.cart.items);
    if(items.length===0) return <div className='mt-10 min-h-[90vh] flex items-center justify-center'>Ooops!! Your Cart is Empty</div>
  return (
    <div className='min-h-screen mt-32'>
      {items.map((item)=>(
        <div>
            <div>
            <p>{item.name}</p>
            <p>{item.price}</p>
            </div>
            </div>
      ))}
    </div>
  )
}

export default CartPage
