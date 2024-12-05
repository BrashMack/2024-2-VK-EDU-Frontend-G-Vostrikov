// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Используем react-router-dom для навигации
import { ChatList } from "./components/ChatList/ChatList.jsx";
import { Chat } from "./components/Chat/Chat.jsx";
import { loadMockChats, loadMockMessages } from "./mocks.js";
import "./index.css";

export const App = () => {
  const [currentView, setCurrentView] = useState(null); // Храним текущий открытый экран

  // useEffect(() => {
  //   // Первоначальная загрузка данных из localStorage (если необходимо)
  //   // Пример: можно загрузить данные о текущем активном чате, если есть
  //   const storedView = localStorage.getItem('currentView');
  //   if (storedView) {
  //       setCurrentView(parseInt(storedView, 10));
  //   } else {
  //       setCurrentView(null); // Если данных нет, устанавливаем начальный экран
  //   }
  // }, []);

  useEffect(() => {
    if (localStorage.length === 0) {
      loadMockChats();
      loadMockMessages();
    }
    //handleLocalDataLoad();
  }, []);

  // let storedView = [];
  // const handleLocalDataLoad = () => {
  //   if (!currentView) {
  //     for (let i = 1; i <= localStorage.length; ++i) {
  //       let chat = JSON.parse(localStorage.getItem(`chat${i}`));
  //       if (chat) {
  //         storedView.push(chat);
  //       }
  //     }
  //   }
  //   else {
  //     const chat = JSON.parse(localStorage.getItem(`chat${currentView}`));
  //     const user = chat.user;
  //     for (let i = 1; i <= localStorage.length; ++i) {
  //       let message = JSON.parse(localStorage.getItem(`${user}${i}`));
  //       if (message) {
  //         storedView.push(message);
  //       }
  //     }
  //   }
  // }

  const handleViewChange = (view) => {
    setCurrentView(view);
    //localStorage.setItem('currentView', view); // Сохраняем текущий вид в localStorage
  };

  return (
    <Router>
      <Routes>
        {!currentView ? (
          <Route
            path="/"
            element={<ChatList onViewChange={handleViewChange} />}
          />
        ) : (
          <Route
            path="/chat/:chatId"
            element={
              <Chat onViewChange={handleViewChange} chatId={currentView} />
            }
          />
        )}
      </Routes>
    </Router>
  );
};
