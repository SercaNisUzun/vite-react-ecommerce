import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Catalogue from '../Pages/Catalogue'
import ProductDetails from '../components/ProductDetails'
import SearchResults from '../Pages/SearchResults'
import TotalBasket from '../Pages/TotalBasket'

function RouterConfig({ searchTerm }) {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/catalogue' element={<Catalogue />} />
                <Route path='/product-details/:id' element={<ProductDetails />} />
                <Route path='/search' element={<SearchResults searchTerm={searchTerm} />} />
                <Route path='/basket' element={<TotalBasket />} />

            </Routes>
        </div>
    )
}

export default RouterConfig
