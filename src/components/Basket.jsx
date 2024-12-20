import React from 'react'
import { useSelector } from 'react-redux';
import '../Css/Main.scss'

function Basket() {

    const { products } = useSelector((store) => store.basket);

    return (
        <div>
            {products.length === 0 ? (
                <h2 style={{ marginTop: '20px' }}>Your Basket is empty..</h2>
            ) : (
                products.map((product) => (
                    <BasketItem key={product.id} product={product} />
                ))
            )}
        </div>
    )
}

const BasketItem = ({ product }) => {

    return (
        <div className='basketList'>
            <div><img className='basketImg' src={product.thumbnail} alt={product.title} /></div>
            <div><p>{product.title}</p></div>
            <div><p>{product.count} PCS</p></div>
            <div><p>$ {(product.price * product.count).toFixed(2)}</p></div>


        </div>
    );
};

export default Basket
