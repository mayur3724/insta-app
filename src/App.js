import React,{useState} from "react";
// import Signup from "./components/signup.js";


import "./style.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { Routes,Route } from "react-router-dom";
import Signup from "./components/Signup";


const App=()=>{
 
  return(
    <div>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/signup" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      
    </div>
  )
}
export default App;