import React, { useState, useEffect } from "react";
import { ChatList } from "./components/ChatList/ChatList.jsx";
import { loadMockChats, loadMockMessages } from "./mocks.js";
import "./index.css";

export const App = () => {
  const [currentView, setCurrentView] = useState(null); // Храним текущий открытый экран

  useEffect(() => {
    if (localStorage.length === 0) {
      loadMockChats();
      loadMockMessages();
    }
    //handleLocalDataLoad();
  }, []);

  const handleViewChange = (view) => {
    setCurrentView(view);
    //localStorage.setItem('currentView', view); // Сохраняем текущий вид в localStorage
  };

  return <ChatList onViewChange={handleViewChange} />;
};
