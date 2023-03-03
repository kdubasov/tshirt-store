import React from 'react';
import "./NotFoundPage.css";
import {Badge, Container} from "react-bootstrap";

const NotFoundPage = () => {
    return (
        <Container className={"NotFoundPage py-3"}>
            <Badge bg={"danger"}>
                404
            </Badge>
        </Container>
    );
};

export default NotFoundPage;
