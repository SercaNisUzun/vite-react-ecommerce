import React from 'react'
import { useSelector } from 'react-redux'
import Review from './Review';

function Reviews() {
    const { selectedProduct } = useSelector((store) => store.product);
    const { reviews } = selectedProduct;


    return (
        <div className='commentSide'>
            {
                reviews && reviews.map((review) => (
                    <Review review={review} />
                ))
            }
        </div>
    )
}

export default Reviews
