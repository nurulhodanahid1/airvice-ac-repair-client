import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Review = (props) => {
    const { serviceName, reviewDescription, name, photo } = props.review;
    return (
        <div className="col-md-4 card-gap">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <p className="text-center"><FontAwesomeIcon className="review-star" icon={faStar} />
                    <FontAwesomeIcon className="review-star" icon={faStar} />
                    <FontAwesomeIcon className="review-star" icon={faStar} />
                    <FontAwesomeIcon className="review-star" icon={faStar} />
                    <FontAwesomeIcon className="review-star" icon={faStar} /></p>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            {reviewDescription}.{' '}
                        </p>
                        <footer className="blockquote-footer">
                            <cite title="Source Title">{name}</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
                <div className="user-img">
                    <img src={photo} alt="" />
                </div>
            </Card>

        </div>
    );
};

export default Review;