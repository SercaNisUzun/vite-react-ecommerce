import React from 'react'
import '../Css/Main.scss'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};



function Product({ product }) {
    console.log(product)
    const { id, thumbnail, title, price, rating } = product;
    const navigate = useNavigate();

    return (
        <div>
            <div className='card' onClick={() => navigate('/product-details/' + id)}>
                <img className='img' src={thumbnail} alt="" />
                <div className='infoitem'>
                    <p className='title'>{title}</p>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Rating
                            name="text-feedback"
                            value={rating}
                            readOnly
                            precision={0.5}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                    </Box>
                    <h3>$ {price}</h3>
                </div>

            </div>

        </div>
    )
}

export default Product
