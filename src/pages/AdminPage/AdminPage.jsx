import React from 'react';
import APCategories from "../../components/AdminPage/APCategories/APCategories.jsx";
import {Container} from "react-bootstrap";
import {useUserAuth} from "../../context-providers/AuthContextProvider.jsx";
import {checkAdmin} from "../../pages-functions/AdminPage/checkAdmin.js";
import NotFoundPage from "../NotFoundPage/NotFoundPage.jsx";
import APProducts from "../../components/AdminPage/APProducts/APProducts.jsx";
import APOrders from "../../components/AdminPage/APOrders/APOrders.jsx";

const AdminPage = () => {

    const {user} = useUserAuth();

    if (checkAdmin(user)){
        return (
            <Container className={"AdminPage py-3"}>
                <h3>Admin page</h3>

                <APCategories />
                <hr/>

                <APProducts />
                <hr/>

                <APOrders />
                <hr/>

            </Container>
        );
    }

    return <NotFoundPage />;
}

export default AdminPage;
