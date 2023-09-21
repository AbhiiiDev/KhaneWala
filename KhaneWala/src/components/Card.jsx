import React,{useEffect, useRef, useState} from 'react'
import {useCart,useDispatchCart} from './ContextReducer';
import PropTypes from 'prop-types';
Card.propTypes = {
  foodItems: PropTypes.object.isRequired, // You can adjust the PropTypes based on the actual data type
  options: PropTypes.any, // Define the correct PropTypes for options
};


export default function Card(props) {
 const dispatch=useDispatchCart();

  let priceRef=useRef();

const [qty, setQty] = useState(1)
const [size, setSize] = useState("")
let options=props.options;
let priceOptions=Object.keys(options);
let foodItem=props.foodItems;
let data=useCart();

const handleQty = (e) => {
  setQty(e.target.value);
}
const handleOptions = (e) => {
  setSize(e.target.value);
}


const handleAddToCart=async()=>{
let food=[];
for(const item of data)
{
if(item.id===foodItem._id)
{
  food=item;
  break;
}
console.log(food);
}
if(food.length!== 0)
{
if(food.size === size)
{
  // console.log(foodItem.size);
  // console.log(food.size);
  await dispatch({type:"Update",id:foodItem._id,name:foodItem.name,price:finalPrice,qty:qty})
  return
}

else if(food.size!==foodItem.size)
{
  await dispatch({type:"Add",id:foodItem._id,name:foodItem.name,price:finalPrice,img:foodItem.img,qty:qty,size:size})
  return
}

return
}
else {
  await dispatch({type:"Add",id:foodItem._id,name:foodItem.name,price:finalPrice,img:foodItem.img,qty:qty,size:size})
  return

}
  }


useEffect(()=>{
setSize(priceRef.current.value)
},[])

let finalPrice=qty* parseInt(options[size]);

  return (
  <div>
        <div className="card m-3" style={{ width: "18rem", margin:"10" }}>
          <img src={foodItem.img} className="card-img-top" alt="..." style={{height:"150px",objectFit:"fill"}} />
          <div className="card-body ">
            <h5 className="card-title">{foodItem.name}</h5>
           

            <div className="container w-100">
              <select className="m-2 h-100 bg-success rounded " onChange={handleQty}>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded " ref={priceRef} onChange={handleOptions}>
           {
            priceOptions.map(
              (data)=>{
                return <option key={data} value={data}>
                  {data}
                </option>
              }
            )
           }
              </select>

              <div className="d-inline h-100 fs-5">
                Rs.{finalPrice}
              </div>
            </div>
          <hr/>
          <button className={`btn btn-success justify-center ms-2`} onClick={handleAddToCart} >
            Add to Cart
          </button>
          </div>
        </div>
      </div>
  )
}
