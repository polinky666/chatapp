import React, { useState, useContext } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'
import { useNavigate, Navigate } from 'react-router-dom';

import { AuthContext } from '../AuthService'

const Login = ({ history }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const setPass = e => {
        setPassword(e.target.value)
    }
    const setAddress = e => {
        setEmail(e.target.value)
    }

    const user = useContext(AuthContext);
    console.log(user)
    const navigate = useNavigate();

    const handleSubmit = e => {
        alert(password)
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {

                console.log(user)
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            });
    };

    if (user) {
        console.log(user)
        return <Navigate replace to='/' />
    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email"
                        value={email}
                        onChange={setAddress} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={setPass}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    );
};

export default Login;