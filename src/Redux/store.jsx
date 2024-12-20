import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./slice/ProductSlice"
import basketReducer from "./slice/BasketSlice"

export const store = configureStore({
    reducer: {
        product: productReducer,
        basket: basketReducer
    },
})