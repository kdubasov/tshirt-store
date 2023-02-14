import React from 'react';
import APCategories from "../../components/AdminPage/APCategories/APCategories.jsx";
import {Container} from "react-bootstrap";

const AdminPage = () => {
    return (
        <Container className={"AdminPage py-3"}>
            <h3>Admin page</h3>
            <APCategories />
        </Container>
    );
};

export default AdminPage;
