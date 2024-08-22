import { cuisineList } from '@/config/Resturant-config';
import React from 'react'



type Props={
    onChange:()=>void;
    selectedCuisines:string[];
}

export default function CuisineFilter() {
  

    return (
    <div className='flex flex-col items-center'>
        <div className='text-xl font-semibold'>Filter by Cuisines</div>
        <>
      {
        cuisineList.slice(0,8).map((cuisine)=>(
        <div className='flex'> {cuisine}</div>
        ))
      }
      </>
    </div>
  )
}
