import { CartState, MenuItem } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:CartState={
    restaurantId:null,
    items:[]
}

export const cartSlice=createSlice({
    name:'Cart',
    initialState,
    reducers:{
        setRestaurant(state,action: PayloadAction<string>){
            if(state.restaurantId!== action.payload)
            {
                state.restaurantId=action.payload;
                state.items=[];
            }
        },
        addToCart(state,action:PayloadAction<MenuItem>) {
            const item=action.payload;
            const existingItem = state.items.find((i) => i._id === item._id);

            if(existingItem)
            {
                existingItem.quantity+=1;
            }
            else {
                state.items.push({
                    ...item,
                    quantity:1
                })
            }
        }
    }
})
export const {setRestaurant,addToCart}=cartSlice.actions;

export default cartSlice.reducer;