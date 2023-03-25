import React, {useState} from 'react';
import "./FeedbackForm.css";
import {useUserAuth} from "../../context-providers/AuthContextProvider.jsx";
import {Badge, Button, Form, FormControl} from "react-bootstrap";
import {handleAddBasket} from "../../pages-functions/FeedbackForm/handleSendFeedback.js";
import {useDispatch} from "react-redux";
import {setNote} from "../../redux-store/slices/notificationsSlice.js";
import {NT_FEEDBACK, NT_FEEDBACK_ERROR} from "../../constants/notes/general.js";
import {handleClearNotes} from "../../general-functions/redux-functions/handleClearNotes.js";

const FeedbackForm = () => {

    const dispatch = useDispatch();
    const { user } = useUserAuth();
    const [email, setEmail] = useState(user ? user.email : "");
    const [text, setText] = useState("");

    const handleSend = e => {
        e.preventDefault();
        handleAddBasket({
            email,
            text,
            user: user ? {
                email: user.email,
                displayName: user.displayName,
                uid: user.uid,
            } : null,
        })
            .then(() => dispatch(setNote(NT_FEEDBACK)))
            .catch(error => dispatch(setNote(NT_FEEDBACK_ERROR(error))))
            .finally(() => {
                handleClearNotes(dispatch,6)
                setEmail("")
                setText("")
            })
    }



    return (
        <div className={"FeedbackForm"}>

            <Badge className={"mb-2"}>
                Форма обртаной связи
            </Badge>

            <Form onSubmit={handleSend}>
                <FormControl
                    required
                    placeholder={"Ваша почта"}
                    type={"email"}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className={"mb-2"}
                />

                <FormControl
                    required
                    placeholder={"Ваш вопрос"}
                    as={"textarea"}
                    rows={4}
                    value={text}
                    onChange={e => setText(e.target.value)}
                    className={"mb-2"}
                />

                <Button type={"submit"} size={"sm"} className={"w-100"}>
                    Отправить
                </Button>
            </Form>

        </div>
    );
};

export default FeedbackForm;
