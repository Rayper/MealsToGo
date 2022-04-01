import firebase from 'firebase/compat';
import React, {useState, createContext} from "react";
import { loginRequest } from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(null)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    // cek apakah ada session
    firebase.auth().onAuthStateChanged((usr) => {
        if(usr){
            setUser(usr);
            // setIsLoading(false);
        }else{
            // setIsLoading(false);
        }
    })

    const onLogin = (email, password) => {
        // pertama kali onlogin dipencet, akan jalankan loading
        setIsLoading(true);
        loginRequest(email, password).
        then((u) => {
            setUser(u);
            setIsLoading(false);
        }).catch((e) => {
            setIsLoading(false);
            setError(e.toString());
        })
    };

    const onRegister = (email, password, repeatedpassword) => {
        setIsLoading(true)
        if(password !== repeatedpassword) {
            setError("Error: Password do not match");
            return
        }
        firebase.auth().createUserWithEmailAndPassword(email, password).
        then((u) => {
            setUser(u);
            setIsLoading(false);
        }).catch((e) => {
            setIsLoading(false);
            setError(e.toString());
        });
    };

    const onLogout = () => {
        setUser(null);
        firebase.auth().signOut();
    }

    return(
            <AuthenticationContext.Provider 
                value={{ 
                    // kalau ada usernya, jadi true 
                    isAuthenticated: !!user,
                    user,
                    isLoading,
                    error,
                    onLogin,
                    onRegister,
                    onLogout
                }}
            >
            {children}
        </AuthenticationContext.Provider>
    )
}