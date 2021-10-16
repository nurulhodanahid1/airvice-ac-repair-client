import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';

const UserOrders = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { name, price, email, status, _id } = props.order;
    const [singleService, setSingleService] = useState([]);

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

    //single service load
    useEffect(() => {
        fetch(`https://polar-mesa-01780.herokuapp.com/order/${_id}`)
            .then(res => res.json())
            .then(data => setSingleService(data))
    }, []);

    //update status
    const onSubmit = data => {
        const singleServiceStatus = {
            newStatus: data.newStatus,
        };
        fetch(`https://polar-mesa-01780.herokuapp.com/update/${singleService._id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(singleServiceStatus)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    console.log("result", result)
                }
            })
    };

    console.log("single", singleService);
    return (
        <div>
            <Row>
                <Col><h5>{name}</h5></Col>
                <Col><h5>{email}</h5></Col>
                <Col><h5>${price}</h5></Col>
                <Col><h5>{status}</h5></Col>
                <Col>
                    {
                        isEngineer && <form onSubmit={handleSubmit(onSubmit)}>
                        status:<input defaultValue={singleService.status} name="newStatus" {...register("newStatus")} />
                        <br />
                        <button className="btn btn-success" type="submit" >update status</button>
                    </form>
                    }
                </Col>
            </Row>
            <hr />
        </div>
    );
};

export default UserOrders;