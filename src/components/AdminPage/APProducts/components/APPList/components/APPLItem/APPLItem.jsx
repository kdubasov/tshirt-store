import React from 'react';
import "./APPLItem.css";
import {Link} from "react-router-dom";
import {LINK_PRODUCT_PAGE_FNC} from "../../../../../../../constants/links.js";
import {Button, ButtonGroup, ListGroup, ListGroupItem} from "react-bootstrap";

const APPLItem = ({data}) => {

    return (
        <div className={"APPLItem"}>
            <Link to={LINK_PRODUCT_PAGE_FNC(data.category, data.id)}>
                {data.title}
            </Link>

            <ListGroup>
                <ListGroupItem>
                    Наличие: {data.availability ? "Да" : "Нет"}
                </ListGroupItem>
                <ListGroupItem>
                    Дата: {data.date}
                </ListGroupItem>
                <ListGroupItem>
                    Цена: {data.price}
                </ListGroupItem>
                <ListGroupItem>
                    Скидка: {data.sale || "Нет"}
                </ListGroupItem>
            </ListGroup>

            <div className="btn-container">
                <ButtonGroup>
                    <Button size={"sm"} variant={"secondary"}>
                        Редактировать
                    </Button>

                    <Button size={"sm"} variant={"danger"}>
                        Удалить
                    </Button>
                </ButtonGroup>
            </div>

        </div>
    );
};

export default APPLItem;
