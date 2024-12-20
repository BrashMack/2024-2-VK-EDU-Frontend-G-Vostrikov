import React, { useEffect } from "react";
import { ChatList } from "./pages/ChatList/ChatList.jsx";
import { Chat } from "./pages/Chat/Chat.jsx";
import { loadMockChats, loadMockMessages } from "./mocks.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const App = () => {
  useEffect(() => {
    if (localStorage.length === 0) {
      loadMockChats();
      loadMockMessages();
    }
  }, []);

  return (
    <Router basename="/2024-2-VK-EDU-Frontend-G-Vostrikov/">
      <Routes>
        <Route path="/" element={<ChatList />} />
        <Route path="/chat/:chatId" element={<Chat />} />
      </Routes>
    </Router>
  );
};
