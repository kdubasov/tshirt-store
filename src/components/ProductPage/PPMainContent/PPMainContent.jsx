import React from 'react';
import "./PPMainContent.css";
import {Badge} from "react-bootstrap";
import PPOrder from "../PPOrder/PPOrder.jsx";

const PPMainContent = ({data}) => {

    console.log(data,"PPMainContent");

    return (
        <div className={"PPMainContent"}>
            <h4 className={"title"}>{data.title}</h4>

            <div className="price">
                <div className="price-inner">
                    <h2>{data.price}₽</h2>
                    {data.sale && <Badge>-{data.sale}%</Badge>}
                </div>
                <p className="small opacity-75">
                    Цена указана без учета скидки
                </p>
            </div>

            {/*order*/}
            <PPOrder data={data} />
        </div>
    );
};

export default PPMainContent;
