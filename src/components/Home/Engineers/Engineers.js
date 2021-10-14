import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Engineer from '../Engineer/Engineer';
import './Engineers.css';

const Engineers = () => {
    const [engineers, setEngineers] = useState([]);
    useEffect(() =>{
        fetch("http://localhost:5000/engineers")
        .then(res => res.json())
        .then(data => setEngineers(data));
    }, [])
    return (
        <div className="engineers-area">
            <Container>
                <h2 className="text-center">Meet the expert <br/> people</h2>
                <Row>
                    {
                        engineers.map(engineer => <Engineer engineer={engineer} key={engineer._id}></Engineer>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Engineers;