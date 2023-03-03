import React, {useState} from 'react';
import "./LoginForm.css";
import {getFormControl} from "../../../general-functions/get-html-functions/getFormControl.jsx";
import {Button, Form} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import { signInWithEmailAndPassword,setPersistence,browserLocalPersistence } from "firebase/auth";
import {authDB} from "../../../database/firebase-connect.js";
import {setNote} from "../../../redux-store/slices/notificationsSlice.js";
import {NT_AUTH_LOGIN, NT_AUTH_LOGIN_ERROR} from "../../../constants/notes/auth.js";
import {handleClearNotes} from "../../../general-functions/redux-functions/handleClearNotes.js";
import {LINK_RESET_PASS, LINK_USER_PROFILE} from "../../../constants/links.js";

const LoginForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (input,value) => {
        const copy = Object.assign({},formData);
        copy[input] = value;
        setFormData(copy);
    }

    const handleSend = e => {
        e.preventDefault();

        setPersistence(authDB, browserLocalPersistence)
            .then(() => {
                signInWithEmailAndPassword(authDB, formData.email, formData.password)
                    .then(() => {
                        dispatch(setNote(NT_AUTH_LOGIN))
                        navigate(LINK_USER_PROFILE)
                    })
                    .catch(error => dispatch(setNote(NT_AUTH_LOGIN_ERROR(error.message))))
                    .finally(() => handleClearNotes(dispatch))
            })
    }

    return (
        <Form onSubmit={handleSend} className={"LoginForm"}>
            {getFormControl("Email","email","email",formData,handleChange)}
            {getFormControl("Пароль","password","password",formData,handleChange)}

            <Button type={"submit"} className={"w-100"} size={"sm"}>
                Войти
            </Button>

            <Link to={LINK_RESET_PASS}>
                Восстановить пароль
            </Link>
        </Form>
    );
};

export default LoginForm;
