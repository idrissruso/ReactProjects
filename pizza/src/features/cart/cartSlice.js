import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload = pizza item
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload = pizza id

      state.cart = state.cart.filter(
        (pizza) => pizza.pizzaId !== action.payload,
      );
      console.log(action.payload);
    },
    increaseQuantity(state, action) {
      const pizza = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload,
      );
      pizza.quantity++;
      pizza.totalPrice = pizza.unitPrice * pizza.quantity;
    },
    decreaseQuantity(state, action) {
      const pizza = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload,
      );
      pizza.quantity--;
      pizza.totalPrice = pizza.unitPrice * pizza.quantity;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
export const getPizzaQuantity = (id) => (state) =>
  state.cart.cart.find((pizza) => pizza.pizzaId === id)?.quantity ?? 0;
export default cartSlice.reducer;
