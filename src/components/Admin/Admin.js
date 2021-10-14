import React, { useContext, useState, useEffect } from 'react';
import "./Admin.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddServices from './AddServices/AddServices';
import ManageServices from './ManageServices/ManageServices';
import EditServices from './EditServices/EditServices';
import { Col, Container, Row } from 'react-bootstrap';
import AddEngineers from './AddEngineers/AddEngineers';
import { UserContext } from '../../App';
import Footer from '../Home/Footer/Footer';
import SideBar from './SideBar/SideBar';

const Admin = () => {
    const [signInUser, setSignInUser] = useContext(UserContext);
    const [isEngineer, setIsEngineer] = useState();

    useEffect(() => {
        fetch('https://polar-mesa-01780.herokuapp.com/isEngineer', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: signInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsEngineer(data));
    }, [])

    return (
        <Router>
            {isEngineer ? <Container>
                <div>
                    <Row>
                        <Col sm={4}>
                            <SideBar></SideBar>
                        </Col>
                        <Col sm={8}>
                            <Switch>
                                <Route path="/admin/addServices">
                                    <AddServices></AddServices>
                                </Route>
                                <Route path="/admin/manageServices">
                                    <ManageServices></ManageServices>
                                </Route>
                                <Route path="/admin/editServices">
                                    <EditServices></EditServices>
                                </Route>
                                <Route path="/admin/addEngineers">
                                    <AddEngineers></AddEngineers>
                                </Route>
                                <Route exact path="/admin">
                                    <AddServices></AddServices>
                                </Route>
                            </Switch>
                        </Col>
                    </Row>
                </div>
            </Container> :
                <h2 className="text-center text-danger">Limited Access Only</h2>

            }
            <Footer></Footer>
        </Router>
    );
};

export default Admin;