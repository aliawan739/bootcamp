import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("login: ",email,password);
        if (email === 'admin123@gmail.com' && password === 'admin123') {
            alert('Successfully logged in as admin');
            navigate('/Dashboard'); 
        } else {
        alert('Sucessfully logged in with any user credentials');
        navigate('/userDashboard');
        }
    };
    return(
        <div>
            <h2>Log In</h2>
            <form className="Login-form" onSubmit={handleSubmit}>
                <input
                type="email" 
                placeholder="Enter your email address"
                value={email}
                onChange={(e)=> setEmail(e.target.value)} 
                />

                <input
                 type="password" 
                 placeholder="Enter your password"
                 value={password}
                 onChange={(e)=> setPassword(e.target.value)} 
                />

                <button type="submit">Log In</button>
                Don't have an account? <Link to="/signup"> Sign up for free </Link>
            </form>
        </div>
    );
};

export default LogIn;