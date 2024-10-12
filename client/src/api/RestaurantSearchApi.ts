import { Results } from "@/types";
import { useQuery } from "react-query";

const BASE_URL=import.meta.env.VITE_BASE_URL;


export const useGetRestaurant=(city?:string)=>{
    const getRestaurant=async():Promise<Results>=>{

        console.log(BASE_URL)
        const response=await fetch(`${BASE_URL}/api/restaurant/search/${city}`);

        if(!response.ok){
            throw new Error('Failed to get Restaurant');
        }

        console.log(response)
        return response.json();
    }

    const {data:results,isLoading}=useQuery("fetchRestaurant",getRestaurant,{
        enabled: !!city
    })

return {results,isLoading};
}