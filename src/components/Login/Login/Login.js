import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    console.log(location.state?.from);
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={handleGoogleLogIn} className="btn btn-primary">Google Sign in</button>
        </div>
    );
};

export default Login;