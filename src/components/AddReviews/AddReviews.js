import React, {useContext} from 'react';
import { useForm } from "react-hook-form";
import { Col, Row, Container} from 'react-bootstrap';
import {UserContext} from '../../App';

const AddReviews = () => {
    const [signInUser, setSignInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        const serviceData = {
            serviceName: data.serviceName,
            reviewDescription: data.reviewDescription,
            ...signInUser
        };
        console.log("data", serviceData);
        const url = `http://localhost:5000/addReviews`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        .then(res => console.log("server site response successfully", res))
    };
    
    return (
        <div>
            <Container>
            <h2>Give us your valuable feedback</h2>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col><h5>Which service you have taken:</h5></Col>
                    <Col><input defaultValue="Service name" name="serviceName" {...register("serviceName")} /></Col>
                </Row>
                <hr />
                <Row>
                    <Col><h5>Review description:</h5></Col>
                    <Col><input defaultValue="Service was awesome" name="reviewDescription" {...register("reviewDescription")} /></Col>
                </Row>
                <hr />
                
                <Row>
                    <Col></Col>
                    <Col><input className="btn btn-success" type="submit" /></Col>
                </Row>
            </form>
            </Container>
        </div>
    );
};

export default AddReviews;