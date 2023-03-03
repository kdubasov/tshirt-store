import React, {useState} from 'react';
import {Badge, Button, Form, FormControl} from "react-bootstrap";
import "./APPAdd.css";
import APPASelect from "./components/APPASelect/APPASelect.jsx";
import APPACategory from "./components/APPACategory/APPACategory.jsx";
import {APPDataGeneral} from "./data/APPDataGeneral.js";

const APPAdd = () => {

    //form data
    const [productData, setProductData] = useState({
        category: "",
        title: "",
        description: "",
        characteristic: "",
        price: "",
        sale: "",
        gender: "",
        sizes: [],
        colors: [],
        delivery: [],
        pay: [],
        images: [],
    });
    console.log(productData);

    //change state data
    const handleChange = (input,value) => {
        const copy = Object.assign({},productData);
        copy[input] = value;
        setProductData(copy)
    }

    //get html for input
    const getFormControl = (input, req, plc, type, textarea = false) => {
        return (
            <FormControl
                as={textarea ? "textarea" : "input"}
                placeholder={plc}
                required={req}
                size={"sm"}
                value={productData[input]}
                onChange={e => handleChange(input, e.target.value)}
                type={type}
            />
        )
    }

    return (
        <div className={"APPAdd"}>
            <Badge className={"w-100 mb-1"} bg={"success"}>
                Добавить товар
            </Badge>

            <Form>
                {/*select category*/}
                <APPACategory handleChange={handleChange} />

                {getFormControl("title",true,"Название","text")}
                {getFormControl("description",true,"Описание","text",true)}
                {getFormControl("characteristic",false,"Характеристики","text",true)}
                {getFormControl("price",true,"Цена (₽)","number",)}
                {getFormControl("sale",false,"Скидка (0-100%)","number",)}

                {/*photos*/}
                <Form.Control
                    type="file"
                    size={"sm"}
                    multiple
                    onChange={e => handleChange("images",e.target.files)}
                />

                {//селекты (размеры/цвета/доставка/оплата)
                    APPDataGeneral.map(elem => (
                        <APPASelect
                            key={elem.input}
                            handleChange={handleChange}
                            title={elem.title}
                            data={elem.data}
                            input={elem.input}
                        />
                    ))
                }

                <Button className={"w-100"} size={"sm"} type={"submit"}>
                    Добавить товар
                </Button>
            </Form>
        </div>
    );
};

export default APPAdd;
