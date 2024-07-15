import { useCreateRestaurantRequest, useGetRestaurantRequest } from '@/api/MyRestaurantApi'
import CreateRestaurantForm from '@/forms/restaurant-form/CreateRestaurantForm'
import React from 'react'

export default function RestaurantPage() {

// const {restaurant,isLoading:isGetLoading}=useGetRestaurantRequest();
const {createRestaurant,isLoading}=useCreateRestaurantRequest();


// if(!restaurant)
// {
//   return <span>couldn't able to get Current Restaurant</span>
// }
  return (
<CreateRestaurantForm  isLoading={isLoading} onSave={createRestaurant}/>
  )
}
