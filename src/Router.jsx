import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.jsx";
import AdminPage from "./pages/AdminPage/AdminPage.jsx";
import NavbarTop from "./general-components/NavbarTop/NavbarTop.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import NotesAlert from "./general-components/NotesAlert/NotesAlert.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage/SignUpPage.jsx";
import {
    LINK_ADMIN,
    LINK_ALL, LINK_CATEGORIES,
    LINK_DEF, LINK_FAVORITES_PAGE,
    LINK_LOGIN, LINK_PRODUCT_PAGE, LINK_PRODUCTS_LIST,
    LINK_RESET_PASS,
    LINK_SIGNUP,
    LINK_USER_PROFILE
} from "./constants/links.js";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage.jsx";
import AuthCheckRoute from "./general-components/AuthCheckRouter.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage.jsx";
import ProductPage from "./pages/ProductPage/ProductPage.jsx";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage.jsx";
import CategoryProductsPage from "./pages/CategoryProductsPage/CategoryProductsPage.jsx";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage.jsx";

const Router = () => {
    return (
        <div className={"Router"} style={{minHeight: "100vh"}}>

            {/*notes alert*/}
            <NotesAlert />

            {/*top menu*/}
            <NavbarTop />

            <Routes>
                <Route path={LINK_DEF} element={<MainPage />} />
                <Route path={LINK_ADMIN} element={<AdminPage />} />
                <Route path={LINK_LOGIN} element={<LoginPage />} />
                <Route path={LINK_SIGNUP} element={<SignUpPage />} />
                <Route path={LINK_ALL} element={<NotFoundPage />} />
                <Route path={LINK_RESET_PASS} element={<ResetPasswordPage />} />
                <Route
                    path={LINK_USER_PROFILE}
                    element={<AuthCheckRoute children={<UserProfilePage />} />}
                />
                <Route path={LINK_CATEGORIES} element={<CategoriesPage />} />
                <Route path={LINK_PRODUCTS_LIST} element={<CategoryProductsPage />} />
                <Route path={LINK_PRODUCT_PAGE} element={<ProductPage />} />
                <Route
                    path={LINK_FAVORITES_PAGE}
                    element={<AuthCheckRoute children={<FavoritesPage />} />}
                />
            </Routes>
        </div>
    );
};

export default Router;
