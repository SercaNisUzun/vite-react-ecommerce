import React from 'react'
import '../Css/Main.scss'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

function Review({ review }) {

    const { rating, comment, date, reviewerName, reviewerEmail } = review;
    const formattedDate = new Date(date).toLocaleDateString('tr-TR') + ' ' + new Date(date).toLocaleTimeString('tr-TR');

    return (
        <div className='commentCard'>
            <p className='commentPerson'>{reviewerName}</p>
            <p>{formattedDate}</p>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Rating
                    name="text-feedback"
                    value={rating}
                    readOnly
                    precision={0.5}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
            </Box>




            <h3>{comment}</h3>

        </div>
    )
}

export default Review
