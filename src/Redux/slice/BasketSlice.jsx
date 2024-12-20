import { createSlice } from '@reduxjs/toolkit'

export const getBasketFromStorage = () => {
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"));
    }
    return []
}

const initialState = {
    products: getBasketFromStorage(),
    drawer: false,
    totalAmount: 0
}

const writeFromBasketToStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket))
}

export const BasketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findProduct = state.products && state.products.find((product) => product.id === action.payload.id);
            if (findProduct) {
                const extractedProducts = state.products.filter((product) => product.id !== action.payload.id);

                findProduct.count += action.payload.count;

                state.products = [...extractedProducts, findProduct];
                writeFromBasketToStorage(state.products)

            } else {
                state.products = [...state.products, action.payload];
                writeFromBasketToStorage(state.products);
            }
        },

        deleteFromBasket: (state, action) => {
            const filteredProducts = state.products.filter((product) => product.id !== action.payload.id);
            state.products = filteredProducts;
            writeFromBasketToStorage(state.products);
        },

        setMinus: (state, action) => {
            const existingProduct = state.products.find(product => product.id === action.payload.id);
            if (existingProduct && existingProduct.count > 1) {
                existingProduct.count -= 1; // Sayıyı azalt
            } else if (existingProduct) {
                state.products = state.products.filter(product => product.id !== action.payload.id); // Sayı 1 ise ürünü kaldır
            }
            writeFromBasketToStorage(state.products);
        },

        setPlus: (state, action) => {
            const existingProduct = state.products.find(product => product.id === action.payload.id);
            if (existingProduct) {
                existingProduct.count += 1; // Sayıyı artır
            }
            writeFromBasketToStorage(state.products);
        },



        setDrawer: (state) => {
            state.drawer = !state.drawer;

        },

        calculateBasket: (state) => {
            state.totalAmount = state.products.reduce((total, product) => {
                return total + (product.price * product.count); // Toplam tutarı hesapla
            }, 0);
        },
    }
})

export const { addToBasket, setDrawer, calculateBasket, deleteFromBasket, setMinus, setPlus } = BasketSlice.actions

export default BasketSlice.reducer