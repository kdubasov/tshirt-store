import React from 'react';
import "./PPListReviews.css";
import {useGetProductReviews} from "../../../pages-hooks/ProductPage/reviews/useGetProductReviews.js";
import PPReviewsItem from "./components/PPReviewsItem/PPReviewsItem.jsx";
import {Badge} from "react-bootstrap";

const PPListReviews = ({data}) => {

    const reviewsList = useGetProductReviews(data);

    //check list length
    if (!reviewsList.length) return;

    //jsx
    return (
        <div className={"PPListReviews"}>
            <Badge>Отзывы о товаре ({reviewsList.length})</Badge>

            {
                reviewsList.map(elem => (
                    <PPReviewsItem key={elem.databaseURL} data={elem} />
                ))
            }
        </div>
    );
};

export default PPListReviews;
