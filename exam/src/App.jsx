import React, { useEffect } from "react";
import { Translator } from "./pages/Translator/Translator.jsx";
import { History } from "./pages/History/History.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Translator />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
};
