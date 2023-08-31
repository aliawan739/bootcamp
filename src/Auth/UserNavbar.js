import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserDashboard';
import '../Auth/UserNavbar.css';
const UserNavbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/login');
    };
    return (
        
            <nav className='navbar'>
                <p className='navbar-text'>User Dashboard Navbar</p>
                <button className='logout-button' onClick={handleLogout}> Logout </button>
            </nav>
    )
}

export default UserNavbar