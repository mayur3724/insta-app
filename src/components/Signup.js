import React, { useState, useContext } from "react";
import axios, { Axios } from "axios";
import UserContext from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const Signup = ({}) => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [setToken] = useContext(UserContext);
    const navigate=useNavigate();


    const [successMessage, setsuccessMessage] = useState("");
    const [errorMessage, seterrorMessage] = useState("")

    const { name, email, password, confirmPassword } = user;

    function updateUser(e) {
        let key = e.target.key;
        let value = e.target.value;
        setUser({ ...user, [key]: value })
    }

    async function implementSignup(e) {
        e.preventDefault();
        try {
            const response = await axios.post("https://instagram-express-app.vercel.app/api/auth/signup",
                {
                    name, email, password
                })
            console.log("success", response.data);
            setsuccessMessage(response.data.message);
            seterrorMessage("")
            setUser({
                name: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
            alert("Signup successful");
            navigate("/dashboard")
        }
        catch (error) {
            console.log("failure", error);
            seterrorMessage(error.reponse.data.message);
            setToken(response.data.data.token);
            localStorage.setItem("token", JSON.stringify(response.data.data,token))
            setsuccessMessage("")
        }
    }

    return (
        <div>
            <h1>Signup</h1>
            {
                successMessage && <h2>{success}</h2>
            }
            {
                errorMessage && <h2>{errorMessage}</h2>
            }
            <form onSubmit={implementSignup}>
                <input type="text" placeholder="Enter Name"
                    name="name" value={name} onChange={updateUser}
                ></input>

                <input type="email" placeholder="Enter mail"
                    name="email" value={email} onChange={updateUser}
                ></input>

                <input type="text" placeholder="Enter password"
                    name="password" value={password} onChange={updateUser}
                ></input>

                <input type="password" placeholder="confirmPassword"
                    name="confirmPassword" value={confirmPassword} onChange={updateUser}
                ></input>

                <button type="submit">submit</button>

            </form>
            
        </div>
    )
}
export default Signup;