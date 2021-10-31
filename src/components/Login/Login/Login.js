import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="login-container">
            <div className="login-item">
                <h1 className="title mx-auto my-2">Log in to <span style={{ color: "#ffc107", marginRight: "2px", fontSize: "26px" }}>T</span>
                    <span style={{ color: "#2196f3", marginRight: "2px", fontSize: "26px" }}>R</span>
                    <span style={{ color: "#cd9581", marginRight: "2px", fontSize: "26px" }}>A</span>
                    <span style={{ color: "#ff5722", marginRight: "2px", fontSize: "26px" }}>V</span>
                    <span style={{ color: "#8e54f5", marginRight: "2px", fontSize: "26px" }}>E</span>
                    <span style={{ color: "#cd9581", marginRight: "2px", fontSize: "26px" }}>L</span>
                    <span style={{ color: "#cd9581", marginRight: "2px", fontSize: "26px" }}>L</span>
                    <span style={{ color: "#ffc107", marginRight: "2px", fontSize: "26px" }}>I</span>
                    <span style={{ color: "#e91e63", marginRight: "2px", fontSize: "26px" }}>C</span>
                    <span style={{ color: "#cd9581", marginRight: "2px", fontSize: "26px" }}>A</span></h1>
                <button onClick={handleGoogleLogIn} className="btn btn-outline-primary mt-5"><i className="pe-2 fab fa-google"></i><h6 style={{ display: "inline" }}>Google Sign in</h6></button>
            </div>
        </div>
    );
};

export default Login;