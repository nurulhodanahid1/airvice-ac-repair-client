import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'

const SideBar = () => {
    return (
        <div className="admin-menu">
            <ul>
                <li><h2>Dashboard</h2></li>
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
    );
};

export default SideBar;