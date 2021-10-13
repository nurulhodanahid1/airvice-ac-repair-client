import React, { useState, useEffect } from 'react';
import Service from '../Service/Service';
import { Row, Spinner, Col, InputGroup, FormControl } from 'react-bootstrap';
import './Home.css';
import { useHistory } from 'react-router-dom';
import Main from './Main/Main';

const Header = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(response => response.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
    }, []);

    const history = useHistory();
    const handleServiceSelect = id => {
        history.push(`/checkout/${id}`)
    }
    return (
        <main>
            <Main></Main>
            {/* <form className="col-md-6 m-auto py-5">
                <div className="input-group mb-3">
                    <input type="text" name="" id="" className="form-control" placeholder="Search your Services" />
                    <div className="input-group-append">
                        <button id="find-meal" type="button" className="btn btn-success">Search</button>
                    </div>
                </div>
            </form> */}

            {
                loading ?
                    <Row>
                        <Col></Col>
                        <Col><Spinner className="loading" animation="border" variant="success" /></Col>
                    </Row> :
                    <Row>
                        {
                            services.map(service => <Service handleServiceSelect={handleServiceSelect} key={service._id} service={service}></Service>)
                        }
                    </Row>
            }
        </main>
    );
};

export default Header;