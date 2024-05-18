import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./ProductsSlice";

export const productStore = configureStore({
    reducer:{
        proreducer : ProductsReducer
    }
})