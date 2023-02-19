import React, {useState} from 'react';
import {Button, Form, FormControl, Modal} from "react-bootstrap";
import {handleRedactCategory} from "../../../../pages-functions/AdminPage/APCRedact/handleRedactCategory.js";
import {useDispatch} from "react-redux";
import {setNote} from "../../../../redux-store/slices/notificationsSlice.js";
import {NT_REDACT_CATEGORY, NT_REDACT_CATEGORY_ERROR} from "../../../../constants/notes/categories.js";
import {handleClearNotes} from "../../../../general-functions/redux-functions/handleClearNotes.js";
import "./APCRedactModal.css";

const APCRedactModal = ({show,onHide,data}) => {

    const dispatch = useDispatch();
    //category data
    const [category, setCategory] = useState(data);

    //get html input
    const getFormControl = (input,req,textarea = false) => {
        return (
            <FormControl
                as={textarea ? "textarea" : "input"}
                className={"mb-1"}
                required={req}
                value={category[input]}
                onChange={e => handleChange(input,e.target.value)}
            />
        )
    }

    //change form data
    const handleChange = (input,value) => {
        const copy = Object.assign({},category);
        copy[input] = value;
        setCategory(copy);
    }

    //send data to database
    const handleSend = e => {
        e.preventDefault;

        handleRedactCategory(e,category)
            .then(() => dispatch(setNote(NT_REDACT_CATEGORY)))
            .catch(() => dispatch(setNote(NT_REDACT_CATEGORY_ERROR)))
        handleClearNotes(dispatch,5)
        onHide();
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Редактировать категорию</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSend}>
                    {getFormControl("title",true)}
                    {getFormControl("description",true,true)}
                    {getFormControl("photo",true)}

                    <Button type={"submit"} className={"w-100"} size={"sm"}>
                        Сохранить
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button size={"sm"} variant="secondary" onClick={onHide}>
                    Отменить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default APCRedactModal;
