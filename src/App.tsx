import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Yan Xun Chang";
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}

export default App;
