import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import { UserContext } from '../../App';

const Checkout = () => {
    const [signInUser, setSignInUser] = useContext(UserContext);
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    const serviceDetail = services.find(service => service._id === serviceId);
    const orderDate = new Date();
    const handleOrderCheckout = () => {
        const newOrder = { ...signInUser, ...serviceDetail, orderDate };
        delete newOrder._id;
        fetch('http://localhost:5000/addOrders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };

    return (
        <div>
            <Container>
                <h3>Hello {signInUser.name}! Please order this items right now!</h3>
                <h2>Checkout</h2>
                <Card style={{ width: '40rem' }}>
                    <Card.Body>
                        <Row>
                            <Col><h5>Description</h5></Col>
                            <Col><h5>Quantity</h5></Col>
                            <Col><h5>Price</h5></Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col><h5>{serviceDetail?.name}</h5></Col>
                            <Col><h5>1</h5></Col>
                            <Col><h5>${serviceDetail?.price}</h5></Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col xs={12} md={8}><h5>Total</h5></Col>
                            <Col xs={6} md={4}><h5>${serviceDetail?.price}</h5></Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Row>
                    <Col xs={12} md={6}></Col>
                    <Col xs={6} md={6}><Button onClick={handleOrderCheckout} className="checkout-btn" variant="success">Checkout</Button></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Checkout;