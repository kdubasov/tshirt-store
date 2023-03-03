import React, {useState} from 'react';
import {Badge, Button, Form, FormControl} from "react-bootstrap";
import "./APCAdd.css";
import {handleAddCategory} from "../../../../../pages-functions/AdminPage/APCAdd/handleAddCategory.js";
import {useDispatch} from "react-redux";
import {setNote} from "../../../../../redux-store/slices/notificationsSlice.js";
import {
    NT_ADD_CATEGORY,
    NT_ADD_CATEGORY_ERROR,
    NT_ADD_CATEGORY_ERROR_REDACT_LINK, NT_ADD_CATEGORY_ERROR_RENAME
} from "../../../../../constants/notes/categories.js";
import {handleClearNotes} from "../../../../../general-functions/redux-functions/handleClearNotes.js";
import {useGetAllCategories} from "../../../../../pages-hooks/AdminPage/Categories/useGetAllCategories.js";

const APCAdd = () => {

    //список категорий
    const categories = useGetAllCategories();

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        photo: "",
        link: "",
    });

    //change state data
    const handleChange = (input,value) => {
        const copy = Object.assign({},formData);
        copy[input] = value;
        setFormData(copy)
    }

    //get html for input
    const getFormControl = (input, req, plc, textarea = false) => {
        return (
            <FormControl
                as={textarea ? "textarea" : "input"}
                placeholder={plc}
                required={req}
                size={"sm"}
                value={formData[input]}
                onChange={e => handleChange(input, e.target.value)}
            />
        )
    }

    const handleSend = e => {
        e.preventDefault();

        if (checkLink()){//check valid link
            handleAddCategory(formData)
                .then(() => dispatch(setNote(NT_ADD_CATEGORY)))
                .catch(() => dispatch(setNote(NT_ADD_CATEGORY_ERROR)))
            setFormData({title: "", description: "", photo: "", link: "",})
            handleClearNotes(dispatch,5)
        }
    }

    const checkLink = () => {
        //check symbols
        if (!(/^[A-Za-z0-9]+$/.test(formData.link))){
            dispatch(setNote(NT_ADD_CATEGORY_ERROR_REDACT_LINK));
            handleClearNotes(dispatch,5);
            return false;
        }

        //check elem in db with link
        if (categories.find(elem => elem.link === formData.link)){
            dispatch(setNote(NT_ADD_CATEGORY_ERROR_RENAME));
            handleClearNotes(dispatch,5);
            return false;
        }

        return true;
    }

    return (
        <div className={"APCAdd"}>
            <Badge bg={"success"} className={"mb-1 w-100"}>
                Добавить категорию
            </Badge>

            <Form onSubmit={handleSend}>
                {getFormControl("title",true,"Название")}
                {getFormControl("description",false,"Описание",true)}
                {getFormControl("photo",true,"Фото (ссылка)")}
                {getFormControl("link",true,"Ссылка")}

                <Button type={"submit"} size={"sm"} className={"w-100"}>
                    Добавить категорию
                </Button>
            </Form>
        </div>
    );
};

export default APCAdd;
