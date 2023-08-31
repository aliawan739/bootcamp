import React, {useState} from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sign Up:',email,password,phone,gender);
        setTimeout(() => {
        setSuccessMessage('Register Successfully, you can now Sign In!');
        setEmail('');
        setPassword('');
        setPhone('');
        setGender('');
        },1000)
    };
    return(
        <div>
            <h2>Sign Up</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
                <input 
                type="email"
                placeholder="Email" 
                value={email} 
                onChange={(e) =>setEmail(e.target.value)}
                />
                    <input
                    type="password"
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) =>setPassword(e.target.value)}
                    />
                        <input
                        type="phone"
                        placeholder="Phone No" 
                        value={phone} 
                        onChange={(e) =>setPhone(e.target.value)}
                        />
                        <select
                        value={gender}
                        onChange={(e) =>setGender(e.target.value)}
                        >
                            <option value="">Select Gender </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>

                        <button type="submit">Sign Up</button>
                        <p>Already have an account? <Link to="/login">Login </Link></p>
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
    );
};

export default SignUp;