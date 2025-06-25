import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalquantity: 0,
    totalprice: 0,
};

const CartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const price = parseFloat(newItem.price?.toString().replace(/[^0-9.]/g, '')) || 0;

            const existingItem = state.products.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.totalprice += price;
            } else {
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: price,
                    image: newItem.image,
                    quantity: 1,
                    totalprice: price
                });
            }

            state.totalquantity += 1;
            state.totalprice += price;
        },

        removeFromCart(state, action) {
            const id = action.payload;
            const findItem = state.products.find(item => item.id === id);

            if (findItem) {
                state.totalquantity -= findItem.quantity;
                state.totalprice -= findItem.totalprice;
                state.products = state.products.filter(item => item.id !== id);
            }
        },
        increaseQuantity(state,action){
            const id = action.payload;
            const findItem = state.products.find(item => item.id === id); 
            if(findItem){
                findItem.quantity++;
                findItem.totalprice += findItem.price;
                state.totalquantity++;
                state.totalprice += findItem.price
            }
        },
        decreaseQuantity(state,action){
            const id = action.payload;
            const findItem = state.products.find(item => item.id === id); 
            if(findItem.quantity > 1){
            if(findItem){
                findItem.quantity--;
                findItem.totalprice -= findItem.price;
                state.totalquantity--;
                state.totalprice -= findItem.price
            }
        }
        }
    }
});

export const { addToCart, removeFromCart,increaseQuantity,decreaseQuantity } = CartSlice.actions;
export default CartSlice.reducer;
