import React from 'react';
import {Badge, Container} from "react-bootstrap";
import SignUpForm from "../../components/SignUpPage/SignUpForm/SignUpForm.jsx";

const SignUpPage = () => {
    return (
        <Container className={"SignUpPage py-3"}>
            <Badge>SignUp</Badge>

            <SignUpForm />
        </Container>
    );
};

export default SignUpPage;
