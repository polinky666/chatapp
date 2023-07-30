import React from "react";

const Messages = ({ messages }) => {
    messages.sort((a, b) => a.date - b.date);
    return (
        <>
            {messages.map((message, index) => (
                <li key={index}>{message.user}:{message.content}</li>
            ))}
        </>
    )
}

export default Messages;