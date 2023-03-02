import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {getFormControl} from "../../../general-functions/get-html-functions/getFormControl.jsx";
import "./SignUpForm.css";

const SignUpForm = () => {

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

    return (
        <Form className={"SignUpForm"}>
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
