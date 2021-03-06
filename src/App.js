import React from "react";
import { createContext } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import Admin from './components/Admin/Admin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Orders from './components/Orders/Orders';
import Checkout from './components/Checkout/Checkout';
import AddReviews from "./components/AddReviews/AddReviews";

export const UserContext = createContext();

function App() {
  const [signInUser, setSignInUser] = useState({});
  return (
    <UserContext.Provider value={[signInUser, setSignInUser]}>
        <Router>
          <Menu></Menu>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/checkout/:serviceId">
              <Checkout></Checkout>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>

            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>

            <PrivateRoute path="/reviews">
              <AddReviews></AddReviews>
            </PrivateRoute>

            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
    </UserContext.Provider>
  );
}

export default App;
