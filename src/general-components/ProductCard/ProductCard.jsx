import React from 'react';
import "./ProductCard.css";
import {Link} from "react-router-dom";
import PCSlider from "./components/PCSlider/PCSlider.jsx";
import {Badge} from "react-bootstrap";
import PpFavoritesButton from "../../components/ProductPage/PPFavoritesButton/PPFavoritesButton.jsx";
import {useUserAuth} from "../../context-providers/AuthContextProvider.jsx";

const ProductCard = ({data}) => {

    const { user } = useUserAuth();

    //если товар скрыт то не показываем его
    if (data.hide) return;

    return (
        <div className={"ProductCard"}>
            <PCSlider productId={data.id} />

            <div className="content">
                <Link to={data.databaseURL}>
                    <h6 className={"title"}>{data.title}</h6>
                </Link>
                <h3 className={"price"}>
                    {data.price}₽
                    {Boolean(+data.sale) && <Badge>-{data.sale}%</Badge>}
                </h3>
                <p className="small opacity-50 m-0">
                    {data.availability ? "В наличии" : "Нет в наличии"}
                </p>
            </div>

            {
                user &&
                <PpFavoritesButton product={data} />
            }
        </div>
    );
};

export default ProductCard;
