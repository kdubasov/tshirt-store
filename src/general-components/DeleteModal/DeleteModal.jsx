import React from 'react';
import {Badge, Button, Modal} from "react-bootstrap";
import {handleDeleteRealtime} from "../../general-functions/firebase-functions/handleDeleteRealtime.js";
import {useDispatch} from "react-redux";
import {setNote} from "../../redux-store/slices/notificationsSlice.js";
import {NT_DELETE, NT_DELETE_ERROR} from "../../constants/notes/general.js";
import {handleClearNotes} from "../../general-functions/redux-functions/handleClearNotes.js";

const DeleteModal = ({show,onHide,data}) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        handleDeleteRealtime(data.databaseURL)
            .then(() => dispatch(setNote(NT_DELETE)))
            .catch(() => dispatch(setNote(NT_DELETE_ERROR)))
            .finally(() => handleClearNotes(dispatch,5))
    }

    return (
        <Modal className={"DeleteModal"} show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Подтверждение удаления</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Нажав кнопку удалить вы подтверждаете удаление
                <Badge>{data.title}</Badge>
            </Modal.Body>
            <Modal.Footer>
                <Button size={"sm"} variant="secondary" onClick={onHide}>
                    Отменить
                </Button>
                <Button size={"sm"} variant="danger" onClick={handleDelete}>
                    Удалить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteModal;
