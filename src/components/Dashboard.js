import axios from "axios";
import React,{useState, useContext,useEffect} from "react";
import UserContext from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const Dashboard=({})=>{
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [token, setToken] = useContext(UserContext)

    const navigate = useNavigate();

    const useEffect=(()=>{
        token && getJoke();
    },[token])


    
    useEffect=(()=>{
        let jsonToken ;
        if(!token){
             jsonToken = localStorage.getItem("token")
        }
        if(!jsonToken){
            navigate("/login")
        }
        else{
            setToken(JSON.parse(jsonToken))
        }
    },[] )
    
    async function getJoke(){
        try{
            const response=await axios.get("https://instagram-express-app.vercel.app/api/auth/zuku",{
                headers:{
                    authorization:'Bearer ${token}'
                }
            })
            setMessage(response.data.data.message)
            setName("")
            setMessage("")
            setName(response.data.data.user.name)
        }
        catch(err){
            console.log(err);
        }
    }

    async function logout(){
        try{
            const reponse = await axios.delete("https://instagram-express-app.vercel.app/api/auth/logou",
            {
                headers:{
                    authorization:'Bearer ${token}'
                }
            })
            setToken("")
            alert("logout successful")
        }
        catch(err){
            console.log(err);
        }
    }

    return(
        <div>
            <div className="logout">
                <button onClick={logout}>Logout</button>
            </div>
            <h1>Welcome {name}</h1>
            {
                message && <p>{message}</p>
            }
            

        </div>
    )
}
export default Dashboard;