import React from 'react';
import "./PPAdditionalData.css";
import {Badge} from "react-bootstrap";

const PPAdditionalData = ({data}) => {
    return (
        <div className={"PPAdditionalData"}>
            <h3>Дополнительная информация</h3>

            <p>
                <Badge>Описание: </Badge><br/>
                {data.description}
            </p>

            {
                data.characteristic &&
                <p>
                    <Badge>Характеристики: </Badge><br/>
                    {data.description}
                </p>
            }

            <p>
                <Badge>Дата публикации товара: </Badge><br/>
                {data.date}
            </p>
        </div>
    );
};

export default PPAdditionalData;
