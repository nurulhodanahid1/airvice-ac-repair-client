import React, { useState, useEffect } from 'react';
import ManageService from '../ManageService/ManageService';
import { Card, Col, Row, Container } from 'react-bootstrap';

const ManageServices = () => {
    const [Services, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    const handleDeleteService = (id) => {
        fetch(`http://localhost:5000/deleteService/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    console.log(result);
                }
            })
    }
    return (
        <div>
            <h3>Manage Services</h3>
            <Container>
                <Card style={{ width: '50rem' }}>
                    <Card.Body>
                        <Row>
                            <Col>Name</Col>
                            <Col>Quantity</Col>
                            <Col>Price</Col>
                            <Col>Action</Col>
                        </Row>
                        <hr />
                        {
                            Services.map(Service => <ManageService handleDeleteService={handleDeleteService} key={Service._id} Service={Service}></ManageService>)
                        }
                    </Card.Body>
                </Card>
            </Container>

        </div>
    );
};

export default ManageServices;