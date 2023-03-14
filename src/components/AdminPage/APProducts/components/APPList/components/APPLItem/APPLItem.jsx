import React, {useState} from 'react';
import "./APPLItem.css";
import {Link} from "react-router-dom";
import {Button, ButtonGroup, ListGroup, ListGroupItem} from "react-bootstrap";
import DeleteModal from "../../../../../../../general-components/DeleteModal/DeleteModal.jsx";
import APPRedactModal from "../../../APPRedactModal/APPRedactModal.jsx";

const APPLItem = ({data}) => {

    //modal delete
    const [modalDelete, setModalDelete] = useState(false);

    //modal delete
    const [modalRedact, setModalRedact] = useState(false);

    return (
        <>
            <div className={"APPLItem"}>
                <Link to={data.databaseURL}>
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
                        <Button onClick={() => setModalRedact(true)} size={"sm"} variant={"secondary"}>
                            Редактировать
                        </Button>

                        <Button onClick={() => setModalDelete(true)} size={"sm"} variant={"danger"}>
                            Удалить
                        </Button>
                    </ButtonGroup>
                </div>
            </div>

            {/*delete product modal*/}
            <DeleteModal
                show={modalDelete}
                onHide={() => setModalDelete(false)}
                data={data}
            />

            {/*redact product modal*/}
            <APPRedactModal
                show={modalRedact}
                onHide={() => setModalRedact(false)}
                data={data}
            />
        </>
    );
};

export default APPLItem;
