import React from 'react';
import {Badge, Container} from "react-bootstrap";
import ListCategories from "../../components/CategoriesPage/ListCategories/ListCategories.jsx";

const CategoriesPage = () => {
    return (
        <Container className={"CategoriesPage py-3"}>
            <Badge>Категории</Badge>

            <ListCategories />
        </Container>
    );
};

export default CategoriesPage;
