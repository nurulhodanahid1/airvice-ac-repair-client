import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer-area">
            <Container className="pt-5">
                <Row>
                    <Col>
                        <h3>About</h3>
                        <p>There are many variatio of lorem ipsum available.</p>
                        <h5>+8801400311262</h5>
                        <h5>nurulhodanahid1@gmail.com</h5>
                        <h5>80 Broklyn Golden Street, Usa</h5>
                    </Col>
                    <Col>
                        <h3>Explore</h3>
                        <ul>
                            <li><Link className="footer-item menu-item" to="/i">Latest Post</Link></li>
                            <li><Link className="footer-item menu-item" to="/r">Success</Link></li>
                            <li><Link className="footer-item menu-item" to="/h">Get a Quote</Link></li>
                            <li><Link className="footer-item menu-item" to="/h">Help</Link></li>
                        </ul>
                    </Col>
                    <Col>
                        <h3>Latest News</h3>
                        <ul>
                            <li><Link className="footer-item menu-item" to="/d">About us</Link></li>
                            <li><Link className="footer-item menu-item" to="/a">Get a Quote</Link></li>
                            <li><Link className="footer-item menu-item" to="/s">success</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <hr />
            <p className="text-center pb-1">	&copy; {new Date().getFullYear()} Nurul Hoda Nahid. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;