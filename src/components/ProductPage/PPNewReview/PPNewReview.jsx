import React, {useState} from 'react';
import {Alert, Badge, Button, Form, FormControl} from "react-bootstrap";
import "./PPNewReview.css";
import {useUserAuth} from "../../../context-providers/AuthContextProvider.jsx";
import {handleAddReview} from "../../../pages-functions/ProductPage/reviews/handleAddReview.js";
import {useDispatch} from "react-redux";
import {setNote} from "../../../redux-store/slices/notificationsSlice.js";
import {NT_REVIEW_ADD, NT_REVIEW_ERROR} from "../../../constants/notes/products.js";
import {handleClearNotes} from "../../../general-functions/redux-functions/handleClearNotes.js";
import {Link} from "react-router-dom";
import {LINK_USER_PROFILE} from "../../../constants/links.js";

const PPNewReview = ({data}) => {

    const dispatch = useDispatch();
    const { user } = useUserAuth();
    const [stars, setStars] = useState("");
    const [text, setText] = useState("");

    const handleSend = e => {
        e.preventDefault();

        handleAddReview({
            user: {
                uid: user?.uid,
                displayName: user?.displayName,
                email: user?.email,
            },
            stars,
            text,
            databaseURL: data.databaseURL + `/reviews/review-${Date.now()}`
        })
            .then(() => dispatch(setNote(NT_REVIEW_ADD)))
            .catch(error => dispatch(setNote(NT_REVIEW_ERROR(error))))
            .finally(() => {
                handleClearNotes(dispatch,6)
                setStars("")
                setText("")
            })
    }

    // check user
    if (!user) return;

    //if user email not Verified
    if (user && !user.emailVerified){
        return (
            <Alert variant={"danger"} className={"w-50 my-2 p-2 small text-center"}>
                Для того чтобы оставлять комментарии о товаре вам нужно
                подтвердить вашу почту.
                <br/>
                <Link to={LINK_USER_PROFILE}>
                    Перейти в личный кабинет
                </Link>
            </Alert>
        );
    }

    // jsx
    return (
        <div className={"PPNewReview"}>

            <Badge className={"w-100 text-center mb-2"}>
                Вы можете оставить отзыв о товаре
            </Badge>

            <Form onSubmit={handleSend}>
                <FormControl
                    value={stars}
                    onChange={e => setStars(e.target.value)}
                    size={"sm"}
                    className={"mb-1"}
                    placeholder={"Оценка от 1 до 5"}
                />

                <FormControl
                    value={text}
                    onChange={e => setText(e.target.value)}
                    size={"sm"}
                    as={"textarea"}
                    rows={4}
                    className={"mb-1"}
                    placeholder={"Опишите ваши впечатления о товаре"}
                />

                <Button variant={"secondary"} type={"submit"} size={"sm"}>
                    Отправить
                </Button>
            </Form>
        </div>
    );
};

export default PPNewReview;
