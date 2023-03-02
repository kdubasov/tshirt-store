import { createContext, useContext, useEffect, useState } from "react";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {authDB} from "../database/firebase-connect.js";
import {useNavigate} from "react-router-dom";
import {LINK_LOGIN} from "../constants/links.js";

const authContext = createContext(null);

export function AuthContextProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    function handleLogOut() {
        return signOut(authDB).then(() => navigate(LINK_LOGIN))
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(authDB, currentUser => {
            console.log("Auth data:\n", currentUser);
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    return (
        <authContext.Provider value={{user, handleLogOut}}>
            {children}
        </authContext.Provider>
    );
}

//hook for get user data from context
export function useUserAuth() {
    return useContext(authContext);
}