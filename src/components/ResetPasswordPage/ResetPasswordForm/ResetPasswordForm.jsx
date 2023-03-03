import React, {useState} from 'react';
import {Button, Form, FormControl} from "react-bootstrap";
import { sendPasswordResetEmail } from "firebase/auth";
import "./ResetPasswordForm.css";
import {authDB} from "../../../database/firebase-connect.js";
import {useDispatch} from "react-redux";
import {setNote} from "../../../redux-store/slices/notificationsSlice.js";
import {NT_AUTH_PASS_EMAIL, NT_AUTH_PASS_EMAIL_ERROR} from "../../../constants/notes/auth.js";
import {handleClearNotes} from "../../../general-functions/redux-functions/handleClearNotes.js";
import {useNavigate} from "react-router-dom";
import {LINK_LOGIN} from "../../../constants/links.js";

const ResetPasswordForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");

    const handleSend = e => {
        e.preventDefault();

        sendPasswordResetEmail(authDB, email)
            .then(() => {
                navigate(LINK_LOGIN);
                dispatch(setNote(NT_AUTH_PASS_EMAIL))
            })
            .catch(error => dispatch(setNote(NT_AUTH_PASS_EMAIL_ERROR(error.message))))
            .finally(() => handleClearNotes(dispatch,10))
    }

    return (
        <Form onSubmit={handleSend} className={"ResetPasswordForm"}>
            <FormControl
                required
                type={"email"}
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={"Email"}
            />

            <Button className={"w-100"} size={"sm"} type={"submit"}>
                Отправить
            </Button>
        </Form>
    );
};

export default ResetPasswordForm;
