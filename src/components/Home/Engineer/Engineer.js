import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './Engineer.css';

const Engineer = (props) => {
    const {name, email, imageURL} = props.engineer;
    return (
        <div className="col-md-4 card-gap eng-card">
            <Card className="align-items-center p-3" style={{ width: '18rem' }}>
                <Card.Img className="eng-img" variant="top" src={imageURL} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{email}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Engineer;