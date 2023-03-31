import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import {useUserAuth} from "../../../context-providers/AuthContextProvider.jsx";

const LogOut = () => {

    const [show, setShow] = useState(false);
    const { handleLogOut } = useUserAuth();

    return (
        <div>
            <Button size={"sm"} variant={"danger"} onClick={() => setShow(true)}>
                Выйти
            </Button>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Подтвердите действие</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Вы точно хотите выйти из аккаунта?
                </Modal.Body>
                <Modal.Footer>
                    <Button size={"sm"} variant="secondary" onClick={() => setShow(false)}>
                        Отмена
                    </Button>
                    <Button size={"sm"} variant="primary" onClick={handleLogOut}>
                        Выйти
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default LogOut;
