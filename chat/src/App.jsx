import React, { useEffect } from "react";
import { ChatList } from "./components/ChatList/ChatList.jsx";
import { Chat } from "./components/Chat/Chat.jsx";
import { loadMockChats, loadMockMessages } from "./mocks.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

export const App = () => {
  // динамический basename
  const basename = window.location.pathname.split("/")[1]
    ? `/${window.location.pathname.split("/")[1]}/`
    : "/";

  useEffect(() => {
    if (localStorage.length === 0) {
      loadMockChats();
      loadMockMessages();
    }
  }, []);

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<ChatList />} />
        <Route path="/chat/:chatId" element={<Chat />} />
      </Routes>
    </Router>
  );
};
