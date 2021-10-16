import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import ProcessPayment from './ProcessPayment/ProcessPayment';
import Footer from '../Home/Footer/Footer'

const Checkout = () => {
    const [signInUser, setSignInUser] = useContext(UserContext);
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);
    const [orderCheckout, setOrderCheckout] = useState(false);
    useEffect(() => {
        fetch("https://polar-mesa-01780.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    const serviceDetail = services.find(service => service._id === serviceId);
    const orderDate = new Date();
    const status = "Pending";
    const handleOrderCheckout = () => {
        setOrderCheckout(true);
    };
    const handlePaymentSuccess = (paymentId) => {
        const newOrder = { ...signInUser, ...serviceDetail, paymentId, orderDate, status };
        delete newOrder._id;
        fetch('https://polar-mesa-01780.herokuapp.com/addOrders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <Container>
                <div className="row">
                    <div style={{ display: orderCheckout ? "none" : "block" }} className="col-md-6">
                        <div>
                            <h3>Hello {signInUser.name}! Please take this service right now!</h3>
                            <h2>Checkout</h2>
                            <Card style={{ width: '40rem' }}>
                                <Card.Body>
                                    <Row>
                                        <Col><h5>Description</h5></Col>
                                        <Col><h5>Price</h5></Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col><h5>{serviceDetail?.name}</h5></Col>
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
                        </div>
                    </div>
                    <div style={{ display: orderCheckout ? 'block' : 'none' }} className="col-md-6">
                        <h2>Please pay</h2>
                        <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Checkout;