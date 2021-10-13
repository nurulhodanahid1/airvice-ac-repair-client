import React, { useState, useEffect } from 'react';
import Service from '../Service/Service';
import { Row, Spinner, Col, InputGroup, FormControl, Container } from 'react-bootstrap';
import './Home.css';
import { useHistory } from 'react-router-dom';
import Main from './Main/Main';
import Reviews from './Reviews/Reviews';

const Header = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(response => response.json())
            .then(data => {
                setServices(data);
            })
    }, []);

    const history = useHistory();
    const handleServiceSelect = id => {
        history.push(`/checkout/${id}`)
    }
    return (
        <main>
            <Main></Main>
            <div className="service-area">
                <Container>
                    <Row>
                        <h2 className="text-center">Checkout our services <br/> we’re offering</h2>
                    </Row>
                    <Row>
                        {
                            services.map(service => <Service handleServiceSelect={handleServiceSelect} key={service._id} service={service}></Service>)
                        }
                    </Row>
                </Container>
            </div>
            <Reviews></Reviews>
        </main>
    );
};

export default Header;