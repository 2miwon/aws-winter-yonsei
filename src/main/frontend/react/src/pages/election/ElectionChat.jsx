import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import '../../css/ElectionChat.css'; // 스타일을 위한 CSS 파일

const ChatComponent = ({ endpoint, title, pledge }) => {
    const [messages, setMessages] = useState([]);

    const handleMessageSubmit = async (e) => {
        e.preventDefault();
        const inputMessage = e.target.elements.message.value.trim();
        const form = {
            "prompt" : inputMessage,
            "pdf" : pledge
        };
        if (!inputMessage) return;

        setMessages(prevMessages => [...prevMessages, { type: 'user', text: inputMessage }]);
        e.target.elements.message.value = ''; // 입력 필드 초기화

        try {
            const response = await axios.post(endpoint, form);
            setMessages(prevMessages => [...prevMessages, { type: 'bot', text: response.data }]);
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages(prevMessages => [...prevMessages, { type: 'bot', text: 'Sorry, there was an error processing your message.' }]);
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-title">{title}</div>
            <div className="chat-content">
                {messages.map((message, index) => (
                    <div key={index} className={`message-container ${message.type === 'user' ? 'message-user-container' : 'message-bot-container'}`}>
                        <div className={`message ${message.type === 'user' ? 'message-user' : 'message-bot'}`}>
                            {message.text}
                        </div>
                    </div>
                ))}
            </div>
            <form onSubmit={handleMessageSubmit} className="chat-input">
                <input type="text" name="message" placeholder="Type a message..." />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

const ElectionChat = ({ candidateInfo }) => {
    return (
        <div className="election-chat-container">
            <ChatComponent endpoint="/agree" title="찬성 의견" pledge={candidateInfo.pledge} />
            <div className="pledge-container">
                <h2>{candidateInfo.name} ({candidateInfo.party})</h2>
                <p>{candidateInfo.pledge}</p>
            </div>
            <ChatComponent endpoint="/disagree" title="반대 의견" pledge={candidateInfo.pledge}/>
        </div>
    );
};

export default ElectionChat;
