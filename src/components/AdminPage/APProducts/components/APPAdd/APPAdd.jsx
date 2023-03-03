import React, {useState} from 'react';
import {Badge, Button, Form, FormControl, FormSelect} from "react-bootstrap";
import "./APPAdd.css";
import {useGetAllCategories} from "../../../../../pages-hooks/AdminPage/Categories/useGetAllCategories.js";

const APPAdd = () => {

    //list categories
    const categories = useGetAllCategories();

    //form data
    const [productData, setProductData] = useState({
        category: {},
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
                <FormSelect size={"sm"} className={"mb-1"}>
                    {
                        categories?.map(elem => (
                            <option value={elem} key={elem.link}>
                                {elem.title}
                            </option>
                        ))
                    }
                </FormSelect>

                {getFormControl("title",true,"Название","text")}
                {getFormControl("description",true,"Описание","text",true)}
                {getFormControl("characteristic",false,"Характеристики","text",true)}
                {getFormControl("price",true,"Цена","number",)}
                {getFormControl("sale",true,"Скидка (%)","number",)}

                <Button className={"w-100"} size={"sm"} type={"submit"}>
                    Добавить товар
                </Button>
            </Form>
        </div>
    );
};

export default APPAdd;
