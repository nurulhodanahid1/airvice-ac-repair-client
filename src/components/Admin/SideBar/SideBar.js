import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faHome, faGripHorizontal, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
    return (
        <div className="admin-menu">
            <ul>
                <li><h2>Dashboard</h2></li>
                <li>
                    <Link to="/admin/addServices"><FontAwesomeIcon className="review-star" icon={faCog} /> Add Services</Link>
                </li>
                <li>
                    <Link to="/admin/manageServices"><FontAwesomeIcon className="review-star" icon={faHome} /> Manage Services</Link>
                </li>
                <li>
                    <Link to="/admin/editServices"><FontAwesomeIcon className="review-star" icon={faGripHorizontal} /> Edit Services</Link>
                </li>
                <li>
                    <Link to="/admin/addEngineers"><FontAwesomeIcon className="review-star" icon={faUserPlus} /> Add Engineers</Link>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;