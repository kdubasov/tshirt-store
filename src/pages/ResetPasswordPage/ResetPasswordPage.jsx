import React from 'react';
import {Badge, Container} from "react-bootstrap";
import ResetPasswordForm from "../../components/ResetPasswordPage/ResetPasswordForm/ResetPasswordForm.jsx";

const ResetPasswordPage = () => {

    return (
        <Container className={"ResetPasswordPage py-3"}>
            <Badge>Восстановить пароль</Badge>

            <ResetPasswordForm />
        </Container>
    );
};

export default ResetPasswordPage;
