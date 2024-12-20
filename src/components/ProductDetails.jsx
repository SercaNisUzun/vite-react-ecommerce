import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../Redux/slice/ProductSlice';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import '../Css/Main.scss';
import Button from '@mui/material/Button';
import BasicTabs from './CustomTabPanel';
import { addToBasket, calculateBasket } from '../Redux/slice/BasketSlice';


function ProductDetails() {

    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product);
    const dispatch = useDispatch();
    const { title, thumbnail, description, price, rating, stock, brand, warrantyInformation, shippingInformation, availabilityStatus, reviews, returnPolicy, images } = selectedProduct;

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product))
            }
        })
    }

    const addBasket = () => {
        const payload = {
            id,
            price,
            thumbnail,
            title,
            count: 1
        }
        dispatch(addToBasket(payload));
        dispatch(calculateBasket())
    }

    useEffect(() => {
        getProductById();
    }, [])

    return (
        <>
            <div className='detailsUp'>
                <div className='imgDetails'>
                    <img className='img' src={thumbnail} alt={title} />
                </div>

                <div className='infoDetails'>
                    <h2 className='h2'>{title}</h2>

                    <div className='infoRateRews'>
                        <div className='infoRate'>
                            <p className='infoP'>{rating}</p>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Rating
                                    name="text-feedback"
                                    value={rating}
                                    readOnly
                                    precision={0.5}
                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                />
                            </Box>

                        </div>

                    </div>

                    <p className='detailsP'>Brand: {brand ? brand : title}</p>

                    <p className='detailsP'>Stock : {availabilityStatus}</p>

                    <div className='infoPrice'>
                        <h2 className='h2'>$ {price}</h2>
                        <Button variant="contained" color="info" onClick={addBasket}>Add to Basket</Button>
                    </div>

                </div>

            </div>

            <BasicTabs />

        </>
    )
}

export default ProductDetails
