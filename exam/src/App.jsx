import React, { useEffect } from "react";
import { Translator } from "./pages/Translator/Translator.jsx";
import { History } from "./pages/History/History.jsx";
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
        <Route path="/" element={<Translator />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
};
