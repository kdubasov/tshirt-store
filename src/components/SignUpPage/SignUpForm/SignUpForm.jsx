import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {getFormControl} from "../../../general-functions/get-html-functions/getFormControl.jsx";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import "./SignUpForm.css";
import {authDB} from "../../../database/firebase-connect.js";
import {useDispatch} from "react-redux";
import {setNote} from "../../../redux-store/slices/notificationsSlice.js";
import {NT_AUTH_SIGNUP, NT_AUTH_SIGNUP_ERROR} from "../../../constants/notes/auth.js";
import {useNavigate} from "react-router-dom";
import {handleClearNotes} from "../../../general-functions/redux-functions/handleClearNotes.js";
import {LINK_LOGIN} from "../../../constants/links.js";
import {checkPassword} from "../../../general-functions/auth-functions/checkPassword.js";

const SignUpForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData,setFormData] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
    })

    const handleChange = (input,value) => {
        const copy = Object.assign({},formData);
        copy[input] = value;
        setFormData(copy);
    }

    const handleSend = e => {
        e.preventDefault();

        //check password
        if (!checkPassword(dispatch, formData.password, formData.passwordConfirm)){
            return;
        }

        //send data to database
        createUserWithEmailAndPassword(authDB, formData.email, formData.password)
            .then(() => {
                updateProfile(authDB.currentUser, {
                    displayName: formData.name,
                }).then(() => console.log("UpdateProfile success!"))
            })
            .then(() => {
                dispatch(setNote(NT_AUTH_SIGNUP))
                navigate(LINK_LOGIN)
            })
            .catch(error => dispatch(setNote(NT_AUTH_SIGNUP_ERROR(error.message))))
            .finally(() => handleClearNotes(dispatch))
    }

    return (
        <Form onSubmit={handleSend} className={"SignUpForm"}>
            {getFormControl("Имя и фамилия","name","text",formData,handleChange)}
            {getFormControl("Email","email","email",formData,handleChange)}
            {getFormControl("Пароль","password","password",formData,handleChange)}
            {getFormControl("Подтвердите пароль","passwordConfirm","password",formData,handleChange)}

            <Button type={"submit"} className={"w-100"} size={"sm"}>
                Создать аккаунт
            </Button>
        </Form>
    );
};

export default SignUpForm;
