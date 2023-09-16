import React, { createContext, useReducer ,useContext} from 'react'
import PropTypes from 'prop-types';
const CartStateContext=createContext();
const CartDispatchContext=createContext();


const reducer=(state,action)=>{
  switch(action.type){
 case "Add":
  return  [...state,{id:action.id,name:action.name,price:action.price,img:action.size,qty:action.qty,size:action.size}];

 

    default:
      console.log("Error in Reducers");
  }

}



 export const CartProvider=({children}) => {

const [state,dispatch]=useReducer(reducer,[])

  return (
 <CartDispatchContext.Provider value={dispatch}>
    <CartStateContext.Provider value={state}>
        {children}  
    </CartStateContext.Provider>
 </CartDispatchContext.Provider>
  ) 
}
CartProvider.propTypes = {
  children:PropTypes.object
  };
  

export const useCart=()=>useContext(CartStateContext);
export const useDispatchCart=()=>useContext(CartDispatchContext);

