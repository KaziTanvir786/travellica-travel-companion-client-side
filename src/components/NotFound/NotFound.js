import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <img className="not-found-img" src="https://i.ibb.co/5TqTqnh/404.jpg" alt="" />
            <br />
            <Link to="/"><button className="btn go-btn btn-outline-primary">Go back</button></Link>
        </div>
    );
};

export default NotFound;