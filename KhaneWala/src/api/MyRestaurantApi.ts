import { Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";



const BASE_URL=import.meta.env.VITE_BASE_URL;


export const useGetRestaurantRequest=()=>{

    
const {getAccessTokenSilently}=useAuth0();

const getRestaurantRequest=async():Promise<Restaurant>=>{
    const authToken=await getAccessTokenSilently();

    const response=await fetch(`${BASE_URL}/api/v1/restaurant`,{
        method:'GET',
        headers:{
            Authorization: `Bearer ${authToken}`,
        }
    });
    if(!response.ok)
    {
        throw new Error('failed to get restaurant');
    }
    return response.json();
};

const {data:restaurant,isLoading}=useQuery("fetchRestaurant",getRestaurantRequest)

return { restaurant,isLoading};

}



export const useCreateRestaurantRequest=()=>
       
    {

const {getAccessTokenSilently}=useAuth0();

    const createRestaurantRequest=async (restaurantFormData:FormData):Promise<Restaurant>=>{
        const authToken=await getAccessTokenSilently();

        const response=await fetch(`${BASE_URL}/api/v1/restaurant`,
            {
                method:"POST",
                headers:{
                    Authorization: `Bearer ${authToken}`,
                },
                body:restaurantFormData
            }
        );

        if(!response.ok){
            throw new Error('Failed to create restaurant'); 
        }
        return response.json();
    };
    const {mutateAsync:createRestaurant,
        isLoading,isError,isSuccess,error
    }=useMutation(createRestaurantRequest);

    if(isSuccess)
        {
            toast.success('restaurant created')
        }

            if(isError)
    {
    toast.error(error.toString());
}


    return {
        createRestaurant,isLoading,isError,isSuccess
    }
    
 
  

}