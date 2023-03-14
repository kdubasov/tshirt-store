import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import {handleCancelOrder} from "../../../../../pages-functions/ProductPage/order/handleCancelOrder.js";
import {useDispatch} from "react-redux";
import {setNote} from "../../../../../redux-store/slices/notificationsSlice.js";
import {handleClearNotes} from "../../../../../general-functions/redux-functions/handleClearNotes.js";
import {NT_ORDER_CANCEL, NT_ORDER_CANCEL_ERROR} from "../../../../../constants/notes/order.js";

const UoCancelOrder = ({data}) => {

    const dispatch = useDispatch();

    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);

    //cancel order
    const handleCancel = () => {
        handleCancelOrder(data, false)
            .then(() => dispatch(setNote(NT_ORDER_CANCEL)))
            .catch(() => dispatch(setNote(NT_ORDER_CANCEL_ERROR)))
            .finally(() => handleClearNotes(dispatch,3))
    }

    return (
        <>
            <Button onClick={() => setShow(true)} size={"sm"} variant={"danger"}>
                Отменить заказ
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Отменить заказ</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Вы уверены в том что хотите отменить заказ?
                </Modal.Body>

                <Modal.Footer>
                    <Button size={"sm"} onClick={handleClose}>
                        Закрыть
                    </Button>
                    <Button size={"sm"} onClick={handleCancel}>
                        Отменить заказ
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default UoCancelOrder;
