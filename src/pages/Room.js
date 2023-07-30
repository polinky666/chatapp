import React, { useState, useEffect, useContext } from 'react';
import { signOut } from 'firebase/auth';
import { collection, onSnapshot, addDoc } from "firebase/firestore";
import { auth, db } from '../config/firebase';
import { AuthContext } from '../AuthService';

import Messages from '../Messages';

const Room = () => {
    const [messages, setMessages] = useState(null);
    const [value, setValue] = useState('');
    useEffect(() => {
        onSnapshot(collection(db, 'messages'), (snapshot) => {
            const messages = snapshot.docs.map((doc) => {
                return doc.data();
            });

            setMessages(messages);
            console.log(messages[0])
        });
    }, []);
    const user = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(collection(db, 'messages'), {
            content: value,
            user: user.displayName,
            date: Date.now()
        });
    };


    return (
        <>
            <h1>Room</h1>
            <ul>
                {messages && <Messages messages={messages} />}
            </ul>
            <p>{user.displayName}</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type="submit">送信</button>
            </form>
            <button onClick={() => signOut(auth)}>Logout</button>
        </>
    );
};

export default Room;