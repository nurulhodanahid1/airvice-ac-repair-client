import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import "./Menu.css";
import logo from '../../images/colek.png';

const Menu = () => {
    const [signInUser, setSignInUser] = useContext(UserContext);
    return (
        <div>
            <Navbar className="nav-bg" expand="lg">
                <Container>
                    <Navbar.Brand><Link className="nav-brand" to="/"><img src={logo} alt="Colek AC Repair" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav className="justify-content-center align-items-center">
                            <Nav.Link><Link className="menu-item" to="/home">Home</Link></Nav.Link>
                            <Nav.Link><Link className="menu-item" to="/orders">Orders</Link></Nav.Link>
                            <Nav.Link><Link className="menu-item" to="/reviews">Reviews</Link></Nav.Link>
                            <Nav.Link><Link className="menu-item" to="/admin">Admin</Link></Nav.Link>
                            {
                                signInUser.email ? <Link className="menu-btn" to="/home"><Button className="login-button" onClick={() => setSignInUser({})} variant="success">Log out</Button></Link>
                                    : <Link className="menu-btn" to="login"><Button className="login-button btn btn-success">Log in</Button></Link>
                            }
                            {
                                signInUser.name && <Navbar.Text>
                                    <Link className="profile" to="/profile"><img src={signInUser.photo} alt="" /></Link>
                                </Navbar.Text>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menu;