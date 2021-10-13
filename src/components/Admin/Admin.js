import React from 'react';
import "./Admin.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddServices from './AddServices/AddServices';
import ManageServices from './ManageServices/ManageServices';
import EditServices from './EditServices/EditServices';
import { Container } from 'react-bootstrap';

const Admin = () => {

    return (
        <Router>
            <Container>
                <div>
                    <div className="admin-menu">
                        <ul>
                            <li><h4>Service add and edit here!!</h4></li>
                            <li>
                                <Link to="/admin/addServices">Add Services</Link>
                            </li>
                            <li>
                                <Link to="/admin/manageServices">Manage Services</Link>
                            </li>
                            <li>
                                <Link to="/admin/editServices">Edit Services</Link>
                            </li>
                        </ul>
                    </div>

                    <hr />

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
                        <Route exact path="/admin">
                            <AddServices></AddServices>
                        </Route>
                    </Switch>
                </div>
            </Container>
        </Router>
    );
};

export default Admin;