import React from 'react';
import "./PPReviewsItem.css";
import {Badge} from "react-bootstrap";

const PPReviewsItem = ({data}) => {

    return (
        <div className={"PPReviewsItem"}>
            <header>
                <p>{data.user.displayName}</p>
                <p className="small opacity-50">
                    {data.date}
                </p>
            </header>

            <Badge>Оценка: {data.stars}/5</Badge>

            <p className="small">{data.text}</p>
        </div>
    );
};

export default PPReviewsItem;
