import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// let name="harry";
function App() {
  const [mode, setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode =()=>{
    if(mode === "light"){
       setMode('dark');
       document.body.style.backgroundColor ='black';
       showAlert("Dark mode has been enabled","success");
      //  document.title = "TextUtils - darkmode";
    }
    else{
      setMode('light');
       document.body.style.backgroundColor ='white';
       showAlert("Light mode has been enabled","success");
      //  document.title = " TextUtils - Lightmode"
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-2">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading= "Enter the text to analyze below "  mode={mode} />
          </Route>
        </Switch>
      </div>
    </Router>
    </>  
  );
}

export default App;
