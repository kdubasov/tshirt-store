import React, {useState} from 'react';
import "./APFItem.css";
import {Button} from "react-bootstrap";
import DeleteModal from "../../../../../general-components/DeleteModal/DeleteModal.jsx";

const APFItem = ({data}) => {

    const [modal, setModal] = useState(false);

    return (
        <div className={"APFItem"}>
            <p>
                Email: <b>{data.email}</b> <br/>
                Text: <b>{data.text}</b> <br/>
                Date: <b>{data.date}</b>
            </p>

            <Button onClick={() => setModal(true)} size={"sm"} variant={"danger"}>
                Удалить сообщение
            </Button>

            <DeleteModal
                show={modal}
                onHide={() => setModal(false)}
                data={data}
            />
        </div>
    );
};

export default APFItem;
