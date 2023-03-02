import React from 'react';
import {Badge, Container} from "react-bootstrap";
import LoginForm from "../../components/LoginPage/LoginForm/LoginForm.jsx";

const LoginPage = () => {
    return (
        <Container className={"LoginPage py-3"}>
            <Badge>Login</Badge>

            <LoginForm />
        </Container>
    );
};

export default LoginPage;
