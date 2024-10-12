import SearchResultInfo from "@/components/SearchResultInfo";
import { useParams } from "react-router-dom";
import { useGetRestaurant } from "@/api/RestaurantSearchApi";
import RestaurantSearchCard from "@/components/RestaurantSearchCard";
import SearchBar, { searchForm } from "@/components/SearchBar";
import { useState } from "react";
import { cuisineList } from "@/config/Resturant-config";
import { Checkbox } from "@/components/ui/checkbox";
import CuisineFilter from "@/components/CuisineFilter";


export default function SearchRestaurantCity() {
  const { city } = useParams();
  const {results,isLoading}=useGetRestaurant(city);

  const[searchState,setSearchState]=useState({
    searchQuery:"",
    page:1,
    selectedCuisine:[],
    sortOptions:"bestMatch"
  })

  if(isLoading)
  {
    <span>Loading....</span>
  }

  const setSearchQuery=(searchFormData:searchForm)=>{
    setSearchState((prevState)=>({
      ...prevState,
      searchQuery:searchFormData.searchQuery
    }))
  }


  return(
    <div className="mt-32 mb-8 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div id="cuisine_list">

 <CuisineFilter/>
 

      </div>
      <div id="main_content" className="flex flex-col gap-5">
    <div>
  <SearchBar placeHolder="search by cuisine or name" onSubmit={setSearchQuery}/>
    </div>
    <div className="flex justify-between">
      <SearchResultInfo total={results?.data?.length} city={city}/>
      sort options
    </div>
    <div>
      {/* Search Result Card */}

      {results?.data.map((restaurant,index)=>(
       <RestaurantSearchCard key={index} restaurant={restaurant}/>
      ))}
    </div>
      </div>

    </div>
  )
}
