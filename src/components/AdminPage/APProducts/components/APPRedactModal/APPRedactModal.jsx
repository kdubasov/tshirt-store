import React, {useState} from 'react';
import "./APPRedactModal.css";
import {Badge, Button, Form, FormControl, Modal} from "react-bootstrap";
import {APPDataGeneral} from "../APPAdd/data/APPDataGeneral.js";
import APPASelect from "../APPAdd/components/APPASelect/APPASelect.jsx";
import {handleRedactProduct} from "../../../../../pages-functions/AdminPage/APPAdd/handleRedactProduct.js";
import {useDispatch} from "react-redux";
import {setNote} from "../../../../../redux-store/slices/notificationsSlice.js";
import {NT_ADD_PRODUCT_ERROR_REDACT, NT_ADD_PRODUCT_REDACT} from "../../../../../constants/notes/products.js";
import {handleClearNotes} from "../../../../../general-functions/redux-functions/handleClearNotes.js";

const AppRedactModal = ({show,onHide,data}) => {

    const dispatch = useDispatch();

    //product data in state
    const [product,setProduct] = useState(data);

    //change state data
    const handleChange = (input,value) => {
        const copy = Object.assign({},product);
        copy[input] = value;
        setProduct(copy)
    }

    //get html for input
    const getFormControl = (input, req, plc, type, textarea = false) => {
        return (
            <div className={"mb-1"}>
                <Badge>{plc}</Badge>
                <FormControl
                    as={textarea ? "textarea" : "input"}
                    required={req}
                    size={"sm"}
                    value={product[input]}
                    onChange={e => handleChange(input, e.target.value)}
                    type={type}
                />
            </div>
        )
    }

    //set data in database
    const handleSend = e => {
        e.preventDefault();

        handleRedactProduct(product)
            .then(() => dispatch(setNote(NT_ADD_PRODUCT_REDACT)))
            .catch(error => dispatch(setNote(NT_ADD_PRODUCT_ERROR_REDACT(error.message))))
            .finally(() => {
                handleClearNotes(dispatch);
                onHide();
            })
    }

    return (
        <Modal className={"AppRedactModal"} show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Редактировать товар
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <Form onSubmit={handleSend}>
                    {getFormControl("title",true,"Название","text")}
                    {getFormControl("description",true,"Описание","text",true)}
                    {getFormControl("characteristic",false,"Характеристики","text",true)}
                    {getFormControl("price",true,"Цена (₽)","number",)}
                    {getFormControl("sale",false,"Скидка (0-100%)","number",)}

                    {//селекты (размеры/цвета/доставка/оплата)
                        APPDataGeneral.map(elem => (
                            <APPASelect
                                key={elem.input}
                                handleChange={handleChange}
                                title={elem.title}
                                data={elem.data}
                                input={elem.input}
                                nowData={product[elem.input]}
                            />
                        ))
                    }

                    <Form.Check
                        type="switch"
                        label="Скрыть товар"
                        checked={product.hide}
                        onChange={() => handleChange("hide",!product.hide)}
                    />

                    <Form.Check
                        type="switch"
                        label="Товар в наличии"
                        checked={product.availability}
                        onChange={() => handleChange("availability",!product.availability)}
                    />

                    <Button type={"submit"} variant={"success"} className={"w-100 mt-3"} size={"sm"}>
                        Подтвердить изменения
                    </Button>
                </Form>

            </Modal.Body>

            <Modal.Footer>
                <Button size={"sm"} variant="secondary" onClick={onHide}>
                    Отменить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AppRedactModal;
