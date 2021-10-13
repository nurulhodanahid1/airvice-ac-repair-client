import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Main.css'

const Main = () => {
    return (
        <div className="main-bg d-flex align-items-center">
            <Container>
                <h1>Quality heating <br/> &amp; air condition <br/> services</h1>
                <Button className="main-button">Contact us</Button>
            </Container>
        </div>
    );
};

export default Main;