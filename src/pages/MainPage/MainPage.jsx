import React from 'react';
import {Badge, Container} from "react-bootstrap";
import GeneralSearch from "../../general-components/GeneralSearch/GeneralSearch.jsx";
import FeedbackForm from "../../general-components/FeedbackForm/FeedbackForm.jsx";

const MainPage = () => {

    return (
        <Container className={"MainPage py-3"}>
            <Badge className={"mb-1"}>Главная страница</Badge>

            <GeneralSearch />

            <FeedbackForm />
        </Container>
    );
};

export default MainPage;
