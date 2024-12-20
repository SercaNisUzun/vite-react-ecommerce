import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../Css/Main.scss'
import Button from '@mui/material/Button';

const SearchResults = ({ searchTerm }) => {
    console.log(searchTerm)

    const { products } = useSelector((store) => store.product);

    const filteredProducts = products.filter(product => {
        return product.tags.includes(searchTerm.toLowerCase()) || product.description.includes(searchTerm.toLowerCase());
    });

    const navigate = useNavigate();


    return (
        <div style={{ marginTop: '20px', marginBottom: '50px' }} >
            <h1>Search Results: </h1>
            {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                    <div className='cardSearch' key={product.id}>

                        <div><img className='imgSearch' src={product.thumbnail} alt={product.title} /></div>
                        <div><h4>{product.title}</h4></div>
                        <div><p>Price: $ {product.price} </p></div>
                        <div><p>Stock: {product.stock} PCS</p></div>
                        <div><Button variant="contained" color="info" onClick={() => navigate('/product-details/' + product.id)}>To Product</Button></div>

                    </div>
                ))
            ) : (
                <p>No results found for "{searchTerm}"</p>
            )}
        </div>
    )
}

export default SearchResults
