import React, { useState } from "react";
import axios, { Axios } from "axios";

const Login = ({setToken}) => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const [successMessage, setsuccessMessage] = useState("");
    const [errorMessage, seterrorMessage] = useState("")

    const { email, password } = user;

    function updateUser(e) {
        let key = e.target.key;
        let value = e.target.value;
        setUser({ ...user, [key]: value })
    }

    async function implementLogin(e) {
        e.preventDefault();
        try {
            const response = await axios.post("https://instagram-express-app.vercel.app/api/auth/login",
                {
                 email, password
                })
            console.log("success", response.data);
            setsuccessMessage(response.data.message);
            seterrorMessage("")
            setUser({
                email: "",
                password: ""
            })
        }
        catch (error) {
            console.log("failure", error);
            seterrorMessage(error.reponse.data.message);
            setToken(response.data.data.token);
            setsuccessMessage("")
        }
    }

    return (
        <div>
            <h1>Login</h1>
            {
                successMessage && <h2>{success}</h2>
            }
            {
                errorMessage && <h2>{errorMessage}</h2>
            }
            <form onSubmit={implementLogin}>

                <input type="email" placeholder="Enter mail"
                    name="email" value={email} onChange={updateUser}
                ></input>

                <input type="text" placeholder="Enter password"
                    name="password" value={password} onChange={updateUser}
                ></input>

                <button type="submit">submit</button>

            </form>
        </div>
    )
}
export default Login;