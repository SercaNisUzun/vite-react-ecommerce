import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],
    selectedProduct: {},
    category: '',
    loading: false

}

const baseUrl = "https://dummyjson.com/products?limit=0"

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
    const response = await axios.get(baseUrl);
    return response.data.products;
})


export const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload
        },

        setCategory: (state, action) => {
            state.category = action.payload
        }


    },

    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true
        })

        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })
    }



})


export const { setSelectedProduct, setCategory } = ProductSlice.actions

export default ProductSlice.reducer