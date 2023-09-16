import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";


const Home = () => {
  const [foodCat, setfoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();

    setfoodCat(response[1]);
    setFoodItem(response[0]);
    // console.log(response[0], response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="container">
        {foodCat.length !== 0
          ? foodCat.map((data) => {
              return (  
                <div key={data._id} className="row mb-3">
                <div className="fs-3 m-3">
                  {data.CategoryName}
                </div> 
               <hr/>
               {
            foodItem.length !==0
            ?
            foodItem.filter((item)=> item.CategoryName===data.CategoryName).map(filterItems=>{
              return (
                <div key={filterItems._id} className="col-12 col-md-6 col-lg-3 ">
            <Card                
            foodItems={filterItems}
            options={filterItems.options[0]}
          />
            </div>
              )
            }):
            <div>
              "No such data found" 
                </div> 
        } 

                </div>


              );
            })
          : ""}
 
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};


export default Home;
