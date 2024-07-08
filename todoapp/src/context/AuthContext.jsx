import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const UserContext = createContext()

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = Cookies.get("token");
        if(storedToken) {
            setToken(storedToken);
        }
    }, [])

    const updateToken = (newToken) => {
        setToken(newToken)
        Cookies.set("token", newToken)
    }

    const logoutUser = () => {
        Cookies.remove("token")
    }

    return <UserContext.Provider value={{ token, updateToken, logoutUser }}>
        {children}
    </UserContext.Provider>

}