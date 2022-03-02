import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homapage from "./components/Homepage";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Yan Xun Chang";
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Homapage />} />
    </Routes>
  );
}

export default App;
