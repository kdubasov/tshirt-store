import React from 'react';
import {Badge, Container} from "react-bootstrap";

const FavoritesPage = () => {
    return (
        <Container className={"FavoritesPage py-3"}>
            <Badge>Избранные товары</Badge>
        </Container>
    );
};

export default FavoritesPage;
