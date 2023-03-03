import React, {useState} from 'react';
import {Card} from "react-bootstrap";
import DeleteModal from "../../../../../../../general-components/DeleteModal/DeleteModal.jsx";
import "./APCListItem.css";
import APCRedactModal from "../../../APCRedactModal/APCRedactModal.jsx";

const APCListItem = ({elem}) => {

    const [modalDelete, setModalDelete] = useState(false);
    const [modalRedact, setModalRedact] = useState(false);

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

                    <Card.Link onClick={() => setModalRedact(true)}>
                        Редактировать
                    </Card.Link>
                    <Card.Link onClick={() => setModalDelete(true)}>
                        Удалить
                    </Card.Link>
                </Card.Body>
            </Card>

            {/*delete category modal*/}
            <DeleteModal
                show={modalDelete}
                onHide={() => setModalDelete(false)}
                data={elem}
            />

            {/*redact category modal*/}
            <APCRedactModal
                show={modalRedact}
                onHide={() => setModalRedact(false)}
                data={elem}
            />
        </>
    );
};

export default APCListItem;
