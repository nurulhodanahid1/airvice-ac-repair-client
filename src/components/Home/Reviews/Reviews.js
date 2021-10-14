import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() =>{
        fetch("https://polar-mesa-01780.herokuapp.com/reviews")
        .then(res => res.json())
        .then(data => setReviews(data));
    }, [])
    return (
        <div className="reviews-area">
            <Container>
                <h2 className="text-center">What they are talking <br/> about us</h2>
                <Row>
                    {
                        reviews.map(review => <Review review={review} key={review._id}></Review>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;