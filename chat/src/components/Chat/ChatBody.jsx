import React from "react";
import styles from "./ChatBody.module.css";
import { MessageItem } from "./MessageItem";

export const ChatBody = ({ messages, chatBodyRef }) => {
  return (
    <div className={styles["chat-body"]}>
      {messages.map((message) => (
        <MessageItem
          key={message[1]}
          message={message[0]}
          messageId={message[1]}
        />
      ))}
      <div ref={chatBodyRef} />
    </div>
  );
};
