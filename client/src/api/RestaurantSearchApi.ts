import { SearchState } from "@/pages/SearchRestaurant";
import { RestaurantSearchResponse, Results } from "@/types";
import { useQuery } from "react-query";

const BASE_URL=import.meta.env.VITE_BASE_URL;

export const useGetRestaurant=(restaurantId?:string)=>{
    const getRestaurant=async():Promise<Results>=>{
        const response=await fetch(`${BASE_URL}/api/restaurant/search/${restaurantId}`);
        if(!response.ok){
            throw new Error('Failed to get Restaurant');
        }

        return response.json();
    }

    const {data:results,isLoading}=useQuery("fetchRestaurant",getRestaurant,{
        enabled: !!restaurantId
    })
return {results,isLoading};
}
export const useSearchRestaurants = (
    searchState: SearchState,
    city?: string
  ) => {
    const createSearchRequest = async (): Promise<RestaurantSearchResponse> => {
      const params = new URLSearchParams();
      params.set("searchQuery", searchState.searchQuery);
      params.set("page", searchState.page.toString());
      params.set("selectedCuisines", searchState.selectedCuisines.join(","));
      params.set("sortOption", searchState.sortOptions);
      const response = await fetch(
        `${BASE_URL}/api/restaurant/search/${city}?${params.toString()}`
      );
  
      if (!response.ok) {
        throw new Error("Failed to get restaurant");
      }
  
      return response.json();
    };
    const { data: results, isLoading } = useQuery(
      ["searchRestaurants", searchState],
      createSearchRequest,
      { enabled: !!city }
    );
    return {
      results,
      isLoading,
    };
  };