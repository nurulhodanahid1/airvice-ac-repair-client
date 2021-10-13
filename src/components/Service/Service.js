import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const { name, price, description, imageURL, _id } = props.service;
    const handleServiceSelect = props.handleServiceSelect;
    return (
        <div className="col-md-4 card-gap">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imageURL} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Row>
                        <Col><h4 className="service-price">${price}</h4></Col>
                        <Col><Button onClick={() => handleServiceSelect(_id)} variant="success">Buy now</Button></Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;