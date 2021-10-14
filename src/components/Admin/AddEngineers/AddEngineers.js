import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import { Col, Row } from 'react-bootstrap';

const AddEngineers = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const engineerData = {
            name: data.name,
            email: data.email,
            imageURL: imageURL
        };
        console.log("data", engineerData);
        const url = `https://polar-mesa-01780.herokuapp.com/addEngineers`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(engineerData)
        })
            .then(res => console.log("server site response successfully", res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files);
        const imageData = new FormData();
        imageData.set('key', '400b38040e9dc25b9a48e040ad618446');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                // console.log(response);
                // console.log(response.data.data.display_url)
                setImageURL(response.data.data.display_url)
            })
            .catch(function (error) {
                console.log(error);
            });

    };
    return (
        <div>
            <h2>Add Engineers</h2>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col><h5>Engineers image:</h5></Col>
                    <Col><input type="file" onChange={handleImageUpload} /></Col>
                </Row>
                <hr />
                <Row>
                    <Col><h5>Name:</h5></Col>
                    <Col><input type="text" name="name" {...register("name")} /></Col>
                </Row>
                <hr />
                <Row>
                    <Col><h5>Email:</h5></Col>
                    <Col><input type="email" name="email" {...register("email")} /></Col>
                </Row>
                <hr />

                <Row>
                    <Col></Col>
                    <Col><input className="btn btn-success" type="submit" /></Col>
                </Row>
            </form>
        </div>
    );
};

export default AddEngineers;