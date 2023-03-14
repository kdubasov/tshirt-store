import React, {useState} from 'react';
import "./OPForm.css";
import {Button, Form, FormControl} from "react-bootstrap";
import {getFormControl} from "../../../general-functions/get-html-functions/getFormControl.jsx";
import {useUserAuth} from "../../../context-providers/AuthContextProvider.jsx";
import {handleAddOrder} from "../../../pages-functions/ProductPage/order/handleAddOrder.js";
import {useDispatch} from "react-redux";
import {setNote} from "../../../redux-store/slices/notificationsSlice.js";
import {NT_ORDER, NT_ORDER_ERROR} from "../../../constants/notes/order.js";
import {handleClearNotes} from "../../../general-functions/redux-functions/handleClearNotes.js";
import {handleDeleteRealtime} from "../../../general-functions/firebase-functions/handleDeleteRealtime.js";
import {LINK_BASKET_PAGE, LINK_USER_PROFILE} from "../../../constants/links.js";
import {useNavigate} from "react-router-dom";

const OpForm = ({basketData}) => {

    const dispatch = useDispatch();
    const { user } = useUserAuth();
    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        phoneNumber: "",
        address: "",
        comment: "",
        uid: user.uid,
        email: user.email,
        name: user.displayName,
    });

    const handleChange = (input,value) => {
        const copy = Object.assign({},formData);
        copy[input] = value;
        setFormData(copy);
    }

    const handleSend = e => {
        e.preventDefault();
        handleAddOrder({user: formData, products: basketData})
            .then(() => {
                dispatch(setNote(NT_ORDER))
                handleDeleteRealtime(LINK_BASKET_PAGE + `/${user.uid}`).then(console.log)
                navigate(LINK_USER_PROFILE)
            })
            .catch(() => dispatch(setNote(NT_ORDER_ERROR)))
            .finally(() => handleClearNotes(dispatch,8))
    }

    return (
        <Form className={"OPForm"} onSubmit={handleSend}>
            {getFormControl("Имя и фамилия","name","text",formData,handleChange)}
            {getFormControl("Email","email","email",formData,handleChange)}
            {getFormControl("Телефон (Начиная с 7)","phoneNumber","number",formData,handleChange)}
            {getFormControl("Адрес","address","text",formData,handleChange)}

            <FormControl
                as={"textarea"}
                value={formData.comment}
                onChange={e => handleChange("comment",e.target.value)}
                placeholder={"Комментарий к заказу"}
            />

            <Button type={"submit"}>
                Отправить заказ
            </Button>
        </Form>
    );
};

export default OpForm;
