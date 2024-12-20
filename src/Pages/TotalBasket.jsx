import React from 'react'
import { useSelector } from 'react-redux';
import Basket from '../components/Basket';

function TotalBasket() {

    const { products } = useSelector((store) => store.basket);
    const totalPrice = products.reduce((total, product) => {
        return total + (Number(product.price) * (product.count || 1)); // Miktar varsa kullan, yoksa 1 olarak varsay
    }, 0);


    return (
        <div>
            <Basket />
            <h2>Total Amount : {totalPrice.toFixed(2)} $ </h2>

        </div>
    )
}

export default TotalBasket
