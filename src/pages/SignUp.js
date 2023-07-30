import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../config/firebase'


const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('');

    const setPass = e => {
        setPassword(e.target.value)
    }
    const setAddress = e => {
        setEmail(e.target.value)
    }
    const setUserName = e => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                updateProfile(user, {
                    displayName: name,
                })
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">UserName</label>
                    <input name="name" type="text" id="name" placeholder="your name" value={name} onChange={setUserName} />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input name="email" type="email" id="email" placeholder="Email" value={email} onChange={setAddress} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={setPass}
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;