import React,{useState} from "react";
import Signup from "./components/signup";
import "./style.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";


const App=()=>{
  const [token, setToken] = useState("");
  return(
    <div>
      <Signup setToken={setToken}/>
      <Login setToken={setToken}/>
      <Dashboard token={token}/>
    </div>
  )
}
export default App;