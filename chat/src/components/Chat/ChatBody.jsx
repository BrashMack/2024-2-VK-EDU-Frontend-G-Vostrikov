import React from 'react';
import styles from './ChatBody.module.css';

function ChatBody({ messages }) {
  return (
    <div className={styles.chatBody}>
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
    </div>
  );
}

function ChatMessage({ message }) {
    const isUserMessage = message.isUser;
    const messageClasses = isUserMessage ? styles.userMessage : styles.otherMessage;

    return (
        <div className={`${styles.chatMessage} ${messageClasses}`}>
            {message.img ? (
                <img src={message.img} alt="Message Image" className={styles.messageImg}/>
            ) : (
                <div className={styles.messageContent}>
                    <p>{message.text}</p>
                    <span className={styles.messageTime}>{message.time}</span>
                    {isUserMessage && message.status === 'read' && (
                        <span className={styles.messageStatus}>✔</span>
                    )}
                    {isUserMessage && message.status === 'sent' && (
                        <span className={styles.messageStatus}>✔</span>
                    )}

                </div>
            )}
        </div>
    );
}

export default ChatBody;
