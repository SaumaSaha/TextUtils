import "./App.css";
import Navbar from "./components/Navbar";
// import About from './components/About';
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  const [Mode, setMode] = useState("light");

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar title="TextUtilities" mode={Mode} toggleMode={toggleMode} />
      <div className="container my-5">
        <TextForm heading="Enter Text Here" mode={Mode} />
      </div>
    </>
  );
}

export default App;
