import { useState } from "react";
import ScholarCards from "./ScholarCards";
import './Scholarship.css'
import axios from 'axios';
import { useLocation } from "react-router-dom";
import Navbar from "./NavBar";
const Scholar = ({ }) => {
    const location = useLocation();
    var scholaships_details = location.state || [];

    return (
        <>
            <Navbar />
            <div className="scholar-page">
                <ScholarCards details={scholaships_details} />
            </div>
        </>
    );
}
export default Scholar;