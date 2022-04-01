import firebase from 'firebase/compat';
import React, {useState, createContext} from "react";
import { loginRequest } from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(null)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const onLogin = (email, password) => {
        // pertama kali onlogin dipencet, akan jalankan loading
        setIsLoading(true);
        loginRequest(email, password).then((u) => {
            setUser(u);
            setIsLoading(false);
        }).catch((e) => {
            setIsLoading(false);
            setError(e);
        })
    };

    return(
        <AuthenticationContext.Provider 
            value={{ 
                user,
                isLoading,
                error,
                onLogin
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}