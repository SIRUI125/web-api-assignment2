import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";

const LoginPage = props => {
    const context = useContext(AuthContext);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        context.authenticate(userName, password);
    };

    let location = useLocation();
    const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };

    if (context.isAuthenticated === true) {
        return <Navigate to={from} />;
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                <h2>Login Page</h2>
                <p>You must log in to view the protected pages</p>
                <input 
                    id="username" 
                    placeholder="Username" 
                    onChange={e => setUserName(e.target.value)}
                    style={{ padding: '10px', marginBottom: '10px', width: '100%', borderRadius: '4px', border: '1px solid #ddd' }} 
                /><br />
                <input 
                    id="password" 
                    type="password" 
                    placeholder="Password" 
                    onChange={e => setPassword(e.target.value)}
                    style={{ padding: '10px', marginBottom: '20px', width: '100%', borderRadius: '4px', border: '1px solid #ddd' }} 
                /><br />
                <button 
                    onClick={login}
                    style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
                >
                    Log in
                </button>
                <p style={{ marginTop: '20px' }}>
                    Not Registered? <Link to="/signup" style={{ color: '#007bff' }}>Sign Up!</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
