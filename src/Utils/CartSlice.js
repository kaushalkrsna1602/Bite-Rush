import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const { img, name, price, isVeg } = action.payload;
            const existingItem = state.find(item => item.name === name);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({ 
                    img, 
                    name, 
                    price, 
                    quantity: 1, 
                    isVeg 
                });
            }
        },

        removeFromCart: (state, action) => {
            const { name } = action.payload;
            const existingItemIndex = state.findIndex(item => item.name === name);
            
            if (existingItemIndex !== -1) {
                const existingItem = state[existingItemIndex];
                
                if (existingItem.quantity === 1) {
                    state.splice(existingItemIndex, 1);
                } else {
                    existingItem.quantity -= 1;
                }
            }
        }

        // Bonus: Add a clearCart reducer if needed
        // clearCart: (state) => {
        //     return [];
        // }
    }
});

export default CartSlice.reducer;
export const { addToCart, removeFromCart } = CartSlice.actions;