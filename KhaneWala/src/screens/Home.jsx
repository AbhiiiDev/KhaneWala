
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import { useEffect, useState } from 'react'


const Home = () => {


const [foodCat, setfoodCat] = useState([]);
const [foodItem, setFoodItem]=useState([]);

const loadData=async()=>{
  let response=await fetch("http://localhost:5000/api/foodData",{
    method:"POST",
    headers:{
      "Content-Type":'application/json'
    }
  }
  )
;
  response=await response.json();
  console.log(response[0],response[1])
}


useEffect(()=>{
  loadData();
},[])

  return (
 
          <>
    <div>
     <Navbar/> 
    </div>
  <div><Carousel/></div>
    <div className='container'>


      {
        foodCat !==[]
        ? foodCat.map((data,index)=>{
          return (
            <div> {data }</div>
          )
        })
        : "********"
      }
      
    </div>

    <div><Footer/></div>
    </>

  )
}

export default Home
