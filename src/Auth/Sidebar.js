import React from "react";
import { Link } from "react-router-dom";
import '../Auth/Sidebar.css';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2 className="heading">Sidebar Menu</h2>
            <ul className="bar-menu">
                <li> 
                    <Link className="link-menu" to="/userdashboard">UserDashboard</Link> 
                </li>
                <li> 
                    <Link className="link-menu" to="/LogIn">LogIn</Link> 
                </li>
                <li> 
                    <Link className="link-menu" to="/LogIn">Logout</Link> 
                </li>
            </ul>
        </div>
    );
};

export default Sidebar