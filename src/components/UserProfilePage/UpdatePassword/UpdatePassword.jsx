import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {updatePassword, reauthenticateWithCredential, EmailAuthProvider} from "firebase/auth";
import {authDB} from "../../../database/firebase-connect.js";
import {useDispatch} from "react-redux";
import {setNote} from "../../../redux-store/slices/notificationsSlice.js";
import {handleClearNotes} from "../../../general-functions/redux-functions/handleClearNotes.js";
import {NT_AUTH_PASS_RESET, NT_AUTH_PASS_RESET_ERROR,} from "../../../constants/notes/auth.js";
import {getFormControl} from "../../../general-functions/get-html-functions/getFormControl.jsx";
import {checkPassword} from "../../../general-functions/auth-functions/checkPassword.js";

const UpdatePassword = () => {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const [formData, setFormData] = useState({
        passwordNow: "",
        password: "",
        passwordConfirm: "",
    });

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

        // Повторная аутентификация пользователя (безопасность ашкуифыу)
        //требуют, чтобы пользователь недавно вошел в систему.
        const credential = EmailAuthProvider.credential(
            authDB.currentUser.email,
            formData.passwordNow
        )

        //password change after update profile
        reauthenticateWithCredential(authDB.currentUser,credential)
            .then(() => {
                updatePassword(authDB.currentUser, formData.password)
                    .then(() => {
                        dispatch(setNote(NT_AUTH_PASS_RESET));
                        setFormData({
                            passwordNow: "",
                            password: "",
                            passwordConfirm: "",
                        });
                        setShow(false);
                    })
                    .catch(error => dispatch(setNote(NT_AUTH_PASS_RESET_ERROR(error.message))))
            })
            .catch(error => dispatch(setNote(NT_AUTH_PASS_RESET_ERROR(error.message))))
            .finally(() => handleClearNotes(dispatch))
    }

    return (
        <div className={"UpdatePassword"}>
            <Button onClick={() => setShow(true)} size={"sm"} variant={"secondary"}>
                Редактировать пароль
            </Button>

            {/*modal*/}
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Введите новый пароль</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={handleSend}>
                        {getFormControl("Старый пароль","passwordNow","password",formData,handleChange)}
                        {getFormControl("Новый пароль","password","password",formData,handleChange)}
                        {getFormControl("Повторите новый пароль","passwordConfirm","password",formData,handleChange)}

                        <Button type={"submit"} size={"sm"}>
                            Подтвердить изменения
                        </Button>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button size={"sm"} onClick={() => setShow(false)}>
                        Отменить
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default UpdatePassword;