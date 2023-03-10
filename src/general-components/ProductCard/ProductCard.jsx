import React from 'react';
import "./ProductCard.css";
import {LINK_PRODUCT_PAGE_FNC} from "../../constants/links.js";
import {Link} from "react-router-dom";
import PCSlider from "./components/PCSlider/PCSlider.jsx";
import {Badge} from "react-bootstrap";
import PpFavoritesButton from "../../components/ProductPage/PPFavoritesButton/PPFavoritesButton.jsx";

const ProductCard = ({data}) => {

    return (
        <div className={"ProductCard"}>
            <PCSlider productId={data.id} />

            <div className="content">
                <Link to={LINK_PRODUCT_PAGE_FNC(data.category, data.id)}>
                    <h6 className={"title"}>{data.title}</h6>
                </Link>
                <h3 className={"price"}>
                    {data.price}₽
                    {data.sale && <Badge>-{data.sale}%</Badge>}
                </h3>
                <p className="small opacity-50 m-0">
                    {data.availability ? "В наличии" : "Нет в наличии"}
                </p>
            </div>

            <PpFavoritesButton product={data} />
        </div>
    );
};

export default ProductCard;
