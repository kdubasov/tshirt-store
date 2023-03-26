import React from 'react';
import "./APReviews.css";
import {Badge} from "react-bootstrap";
import {useGetAllReviews} from "../../../pages-hooks/ProductPage/reviews/useGetAllReviews.js";
import PPReviewsItem from "../../ProductPage/PPListReviews/components/PPReviewsItem/PPReviewsItem.jsx";

const APReviews = () => {

    const listReviews = useGetAllReviews();

    return (
        <div className={"APReviews"}>
            <h5><Badge>Отзывы ({listReviews.length})</Badge></h5>

            {
                !listReviews.length &&
                <h6>Список отзывов пуст</h6>
            }

            {
                !!listReviews.length &&
                listReviews.map(elem => (
                    <PPReviewsItem key={elem.databaseURL} data={elem} />
                ))
            }

        </div>
    );
};

export default APReviews;
