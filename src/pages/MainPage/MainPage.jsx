import React from 'react';
import {Container} from "react-bootstrap";
import ListCategories from "../../components/MainPage/ListCategories/ListCategories.jsx";

const MainPage = () => {

    return (
        <Container className={"MainPage py-3"}>
            <h3>Main Page</h3>

            <ListCategories />
        </Container>
    );
};

export default MainPage;
