import React from 'react';
import { useForm } from "react-hook-form";
import {useState} from 'react';
import axios from "axios";
import { Col, Row } from 'react-bootstrap';

const AddServices = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    console.log("img", imageURL)

    const onSubmit = data => {
        const serviceData = {
            name: data.name,
            description: data.description,
            price: data.price,
            imageURL: imageURL
        };
        console.log("data", serviceData);
        const url = `https://polar-mesa-01780.herokuapp.com/addServices`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
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
            <h3>Add your services</h3>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col><h5>service name:</h5></Col>
                    <Col><input defaultValue="New exiting event" name="name" {...register("name")} /></Col>
                </Row>
                <hr />
                <Row>
                    <Col><h5>service description:</h5></Col>
                    <Col><input defaultValue="Our awesome service" name="description" {...register("description")} /></Col>
                </Row>
                <hr />
                <Row>
                    <Col><h5>Add image:</h5></Col>
                    <Col><input type="file" onChange={handleImageUpload} /></Col>
                </Row>
                <hr />
                <Row>
                    <Col><h5>Add price:</h5></Col>
                    <Col><input type="number" defaultValue="00" price="price" {...register("price")} /></Col>
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

export default AddServices;