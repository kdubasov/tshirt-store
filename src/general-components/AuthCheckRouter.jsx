import React from "react";
import {Navigate} from "react-router-dom";
import {useUserAuth} from "../context-providers/AuthContextProvider.jsx";
import {LINK_LOGIN} from "../constants/links.js";
const AuthCheckRoute = ({ children }) => {
    const { user } = useUserAuth();

    if (!user) {
        return <Navigate to={LINK_LOGIN} />;
    }
    return children;
};

export default AuthCheckRoute;