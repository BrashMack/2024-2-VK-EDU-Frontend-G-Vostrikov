import React, { useEffect, useRef } from "react";
import styles from "./ChatBody.module.scss";
import { MessageItem } from "../../components/MessageItem/MessageItem.jsx";

export const ChatBody = ({ messages }) => {
  const chatBodyRef = useRef(null);

  useEffect(() => {
      if (chatBodyRef.current) {
        chatBodyRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [messages]);

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
