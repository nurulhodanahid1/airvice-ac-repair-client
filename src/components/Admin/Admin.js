import React, {useContext, useState, useEffect} from 'react';
import "./Admin.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddServices from './AddServices/AddServices';
import ManageServices from './ManageServices/ManageServices';
import EditServices from './EditServices/EditServices';
import { Container } from 'react-bootstrap';
import AddEngineers from './AddEngineers/AddEngineers';
import {UserContext} from '../../App';
import Footer from '../Home/Footer/Footer';

const Admin = () => {
    const [signInUser, setSignInUser] = useContext(UserContext);
    const [isEngineer, setIsEngineer] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/isEngineer', {
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
                        <li>
                            <Link to="/admin/addEngineers">Add Engineers</Link>
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
                    <Route path="/admin/addEngineers">
                        <AddEngineers></AddEngineers>
                    </Route>
                    <Route exact path="/admin">
                        <AddServices></AddServices>
                    </Route>
                </Switch>
            </div>
        </Container>:
        <h2 className="text-center">Limited Access Only</h2>
            
        }
        <Footer></Footer>
        </Router>
    );
};

export default Admin;