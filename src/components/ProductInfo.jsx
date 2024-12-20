import React from 'react'
import { useSelector } from 'react-redux'
import '../Css/Main.scss'




function ProductInfo() {

    const { selectedProduct } = useSelector((store) => store.product);
    const { description, stock, warrantyInformation, shippingInformation, returnPolicy } = selectedProduct;

    return (
        <div className='infoConteiner'>
            <h2 className='infoH2'>{description}</h2>
            <p className='infoP'><span className='infoSpan'>Stock:</span> {stock} PCS</p>
            <p className='infoP'><span className='infoSpan'>Warranty:</span> {warrantyInformation}</p>
            <p className='infoP'><span className='infoSpan'>Shipping:</span> {shippingInformation}</p>
            <p className='infoP'><span className='infoSpan'>Return Policy:</span> {returnPolicy}</p>
        </div>
    )
}

export default ProductInfo
