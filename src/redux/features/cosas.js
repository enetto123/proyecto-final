import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    cosa: [],
  }

export const cosaSlice = createSlice({
    name: "cosas",
    initialState,
    reducers: {
        add (state, action){
            const itemIndex = state.cosa.findIndex(
                (item) => item.id === action.payload.id
            );
                if(itemIndex>=0){
                    state.cosa[itemIndex].cartQuantity +=1
                }else{
                    const tempProduct = {...action.payload,cartQuantity:1};
                    state.cosa.push(tempProduct);
                }
        },
        clearCart: (state) =>{
            state.cosa = [];
        },
        removeFromCart(state,action){
            const nextCosa = state.cosa.filter(
                cartIt => cartIt.id !== action.payload.id
            )
            state.cosa = nextCosa;
        }

    }
})




export const { add, clearCart, removeFromCart } = cosaSlice.actions

export default cosaSlice.reducer
