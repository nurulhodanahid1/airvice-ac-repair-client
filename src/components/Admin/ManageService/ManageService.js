import React from 'react';
import { Col, Row} from 'react-bootstrap';
import deleteIcon from './Group 33150.png';
import './ManageService.css';

const ManageService = (props) => {
    const { name, price, imageURL, _id } = props.Service;
    const handleDeleteService = props.handleDeleteService;
    return (
        <div>
            <Row>
                <Col>{name}</Col>
                <Col>1</Col>
                <Col>${price}</Col>
                <Col><button onClick={() => handleDeleteService(_id)} className="action-button"><img src={deleteIcon} alt="" /></button></Col>
            </Row>
            <hr />
        </div>
    );
};

export default ManageService;