import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import reducer from "./cartSlice";
import { useReducer } from "react";

const appStore = configureStore ({
 reducer: {
    cart: cartReducer,

 },
});

export default appStore;
