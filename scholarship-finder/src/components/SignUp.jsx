import axios from 'axios';
import React, { useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        user_name: '',
        email: '',
        password: '',
        gender: 'male',
        studies: 'below 10th',
        caste: 'BC',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        var req = await axios.post('http://localhost:8080/signup', formData, {
            withCredentials: true
        });
        console.log(req);
        if (req.data.message) {
            navigate('/scholarships', { state: req.data.data });
        }
        else {

            alert("User Already Exist");
        }
    }

    const navigateToLogin = () => {
        navigate('/login');
    }
    return (
        <div className="signup">

            <div className="signup-container">

                <form onSubmit={handleSubmit}>
                    <h1 style={{ alignSelf: "center" }}>Signup</h1>
                    <div className="form-elements">
                        <label htmlFor="user_name">User Name</label>
                        <input
                            id="user_name"
                            type="text"
                            name="user_name"
                            value={formData.user_name}
                            onChange={handleChange}
                            placeholder="Enter your User Name"
                            required
                        />
                    </div>
                    <div className="form-elements">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your Email"
                            required
                        />
                    </div>
                    <div className="form-elements">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="form-elements">
                        <label htmlFor="gender">Gender :</label>
                        <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                            <option value="male" >Male</option>
                            <option value="female">Female</option>
                            <option value="trans">Trans gender</option>
                        </select>

                    </div>
                    <div className="form-elements">
                        <label htmlFor="studies">Field of Study</label>
                        <select name='studies' id='studies' value={formData.studies} onChange={handleChange}>
                            <option value="below 10th">Below 10th</option>
                            <option value="below 12th">Below 12th</option>
                            <option value="B.E">B.E</option>
                            <option value="B.Tech">B.Tech</option>
                            <option value="B.com">B.com</option>
                            <option value="M.E">M.E</option>
                        </select>
                    </div>
                    <div className="form-elements">
                        <label htmlFor="caste">Caste</label>
                        <select name="caste" value={formData.caste} onChange={handleChange} id="caste">
                            <option value="BC">BC</option>
                            <option value="MBC">MBC</option>
                            <option value="OC">OC</option>
                            <option value="SC/ST">SC</option>
                            <option value="SC/ST">ST</option>
                        </select>
                    </div>
                    <div className="form-elements">
                        <button type="submit">Sign Up</button>
                    </div>
                    <p>Already have an account? <span style={{ cursor: "pointer", color: "" }} onClick={navigateToLogin}>Log In</span></p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
