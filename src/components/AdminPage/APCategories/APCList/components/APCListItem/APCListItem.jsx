import React, {useState} from 'react';
import {Card} from "react-bootstrap";
import DeleteModal from "../../../../../../general-components/DeleteModal/DeleteModal.jsx";
import "./APCListItem.css";

const APCListItem = ({elem}) => {

    const [modalDelete, setModalDelete] = useState(false);

    return (
        <>
            <Card className={"APCListItem mb-2 small"}>
                <img src={elem.photo} alt=""/>
                <Card.Body>
                    <Card.Title>{elem.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted small">
                        {elem.date}
                    </Card.Subtitle>
                    <Card.Text>{elem.description}</Card.Text>

                    <Card.Link>Редактировать</Card.Link>
                    <Card.Link onClick={() => setModalDelete(true)}>
                        Удалить
                    </Card.Link>
                </Card.Body>
            </Card>

            <DeleteModal
                show={modalDelete}
                onHide={() => setModalDelete(false)}
                data={elem}
            />
        </>
    );
};

export default APCListItem;
