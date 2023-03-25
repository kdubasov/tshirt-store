import React from 'react';
import "./APFeedback.css";
import {useGetFeedback} from "../../../pages-hooks/FeedbackForm/useGetFeedback.js";
import {Badge} from "react-bootstrap";
import APFItem from "./components/APFItem/APFItem.jsx";

const APFeedback = () => {

    const data = useGetFeedback();

    return (
        <div className={"APFeedback"}>
            <h5><Badge>Сообщения с ФОС ({data.length})</Badge></h5>

            {!data.length && <p>Сообщений нет</p>}

            <div className="content">
                {
                    data.map(elem => (
                        <APFItem key={elem.databaseURL} data={elem} />
                    ))
                }
            </div>

        </div>
    );
};

export default APFeedback;
