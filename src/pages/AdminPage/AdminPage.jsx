import React from 'react';
import APCategories from "../../components/AdminPage/APCategories/APCategories.jsx";
import {Container} from "react-bootstrap";
import {useUserAuth} from "../../context-providers/AuthContextProvider.jsx";
import {checkAdmin} from "../../pages-functions/AdminPage/checkAdmin.js";
import NotFoundPage from "../NotFoundPage/NotFoundPage.jsx";
import APProducts from "../../components/AdminPage/APProducts/APProducts.jsx";

const AdminPage = () => {

    const {user} = useUserAuth();

    if (checkAdmin(user)){
        return (
            <Container className={"AdminPage py-3"}>
                <h3>Admin page</h3>
                <APCategories />
                <APProducts />
            </Container>
        );
    }

    return <NotFoundPage />;
}

export default AdminPage;
