import React, { useState } from "react";
import userContext from "./UserContext";

const UserProvider = (props) => {
    const [token, setToken] = useState("");
    return (

        <userContext.Provider value={
            {
                token: token,
                setToken: setToken
            }
        }>

            {props.children}

        </userContext.Provider>

    )
}
export default UserProvider;