import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled","success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode Disabled","success");
    }
  };

  return (
    <>
      <Navbar title="TextUtilities" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-5">
        <TextForm heading="Enter Text Here" mode={Mode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
