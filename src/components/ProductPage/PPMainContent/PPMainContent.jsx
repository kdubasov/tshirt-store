import React from 'react';
import "./PPMainContent.css";
import {Badge} from "react-bootstrap";
import PPOrder from "../PPOrder/PPOrder.jsx";

const PPMainContent = ({data}) => {

    // console.log(data,"PPMainContent");

    return (
        <div className={"PPMainContent"}>
            <h4 className={"title"}>{data.title}</h4>
            <p className="small opacity-50">
                {data.availability ? "В наличии" : "Нет в наличии"}
            </p>

            <div className="price">
                <div className="price-inner">
                    <h2>{data.price}₽</h2>
                    {Boolean(+data.sale) && <Badge>-{data.sale}%</Badge>}
                </div>
                {
                    Boolean(+data.sale) &&
                    <p className="small opacity-75">
                        Цена указана без учета скидки
                    </p>
                }
            </div>

            {/*order*/}
            {//если их нет в наличии то не показываем "добавить в корзину"
                data.availability &&
                <PPOrder data={data} />
            }
        </div>
    );
};

export default PPMainContent;
