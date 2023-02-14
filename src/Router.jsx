import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.jsx";
import AdminPage from "./pages/AdminPage/AdminPage.jsx";
import NavbarTop from "./general-components/NavbarTop/NavbarTop.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import NotesAlert from "./general-components/NotesAlert/NotesAlert.jsx";

const Router = () => {
    return (
        <div className={"Router"} style={{minHeight: "100vh"}}>

            {/*notes alert*/}
            <NotesAlert />

            <NavbarTop />
            <Routes>
                <Route path={"/"} element={<MainPage />} />
                <Route path={"/admin"} element={<AdminPage />} />
                <Route path={"*"} element={<NotFoundPage />} />
            </Routes>
        </div>
    );
};

export default Router;
