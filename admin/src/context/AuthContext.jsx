import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext({
    admin: null,
    setAdmin: () => {} 
})

export const AuthContextProvider = ({children}) => {
    const [admin, _setAdmin] = useState(JSON.parse(localStorage.getItem('login')))

    const setAdmin = (value) => {
        _setAdmin(value)
        localStorage.setItem('login', JSON.stringify(value))
    }

    return (
        <AuthContext.Provider
            value={{admin, setAdmin}}
        >
            {children}
        </AuthContext.Provider>
    )
} 