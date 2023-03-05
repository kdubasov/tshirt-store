import React, {useState} from 'react';
import "./APPLItem.css";
import {Link} from "react-router-dom";
import {LINK_PRODUCT_PAGE_FNC} from "../../../../../../../constants/links.js";
import {Button, ButtonGroup, ListGroup, ListGroupItem} from "react-bootstrap";
import DeleteModal from "../../../../../../../general-components/DeleteModal/DeleteModal.jsx";

const APPLItem = ({data}) => {

    //modal delete
    const [modalDelete, setModalDelete] = useState(false);

    return (
        <>
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

                        <Button onClick={() => setModalDelete(true)} size={"sm"} variant={"danger"}>
                            Удалить
                        </Button>
                    </ButtonGroup>
                </div>
            </div>

            {/*delete category modal*/}
            <DeleteModal
                show={modalDelete}
                onHide={() => setModalDelete(false)}
                data={data}
            />
        </>
    );
};

export default APPLItem;
