import { useAppSelector } from '@/app/hooks'
import ItemCard from '@/components/ItemCard';

const CartPage = () => {
    const items=useAppSelector(state=>state.cart.items);
    if(items.length===0) return <div className='mt-10 min-h-[90vh] flex items-center justify-center'>Ooops!! Your Cart is Empty</div>

    const total=items.reduce((acc,item)=> acc+item.price* item.quantity,0)
  return (
    <div className='min-h-[90vh] flex flex-col mt-40 items-center gap-2'>
      {items.map((item)=>(
        <ItemCard item={item} key={item._id}/>
      ))}
      <div>
        <h2 className='font-bold'>Bill details:</h2>
        <span className=''>Item Total: {total} </span>
        <span className=''>Delivery Price: {} </span>
      </div>
    </div>
  )
}

export default CartPage
