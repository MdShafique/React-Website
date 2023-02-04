import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="fw-bolder bg-Success p-4">
           <Link className="m-5 style-on" to="/home">Home</Link>
           <Link className="m-5 style-on" to="/About">About</Link>
           <Link className="m-5 style-on" to="/Education">Education</Link>
           <Link className="m-5 style-on" to="/Admissions">Admissions</Link>
           <Link className="m-5 style-on" to="/Contact">Contact</Link>
           <Link className="m-5 style-on" to="/Services">Services</Link>
        </div>
    );
};

export default Header;