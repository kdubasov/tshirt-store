import React, {useState} from 'react';
import "./LoginForm.css";
import {getFormControl} from "../../../general-functions/get-html-functions/getFormControl.jsx";
import {Button, Form} from "react-bootstrap";

const LoginForm = () => {

    const [formData,setFormData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (input,value) => {
        const copy = Object.assign({},formData);
        copy[input] = value;
        setFormData(copy);
    }

    return (
        <Form className={"LoginForm"}>
            {getFormControl("Email","email","email",formData,handleChange)}
            {getFormControl("Пароль","password","password",formData,handleChange)}

            <Button type={"submit"} className={"w-100"} size={"sm"}>
                Войти
            </Button>
        </Form>
    );
};

export default LoginForm;
