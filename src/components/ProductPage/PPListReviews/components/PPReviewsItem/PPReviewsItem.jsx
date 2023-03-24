import React, {useState} from 'react';
import "./PPReviewsItem.css";
import {Badge, Button} from "react-bootstrap";
import DeleteModal from "../../../../../general-components/DeleteModal/DeleteModal.jsx";
import {checkAdmin} from "../../../../../pages-functions/AdminPage/checkAdmin.js";
import {useUserAuth} from "../../../../../context-providers/AuthContextProvider.jsx";

const PPReviewsItem = ({data}) => {

    const { user } = useUserAuth();
    const [modal, setModal] = useState(false);
    const admin = checkAdmin(user);

    return (
        <div className={"PPReviewsItem"}>
            <header>
                <p>{data.user.displayName}</p>
                <p className="small opacity-50">
                    {data.date}
                </p>
            </header>

            {//if admin show email user
                admin &&
                <p className="small">
                    <b>{data.user.email}</b>
                </p>
            }

            <Badge>Оценка: {data.stars}/5</Badge>

            <p className="small">{data.text}</p>

            {
                (admin || data.user.uid === user.uid) &&
                <Button size={"sm"} variant={"danger"} onClick={() => setModal(true)}>
                    Удалить отзыв
                </Button>
            }

            <DeleteModal
                show={modal}
                onHide={() => setModal(false)}
                data={data}
            />
        </div>
    );
};

export default PPReviewsItem;
