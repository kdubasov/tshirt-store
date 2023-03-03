import React from 'react';
import {FormSelect} from "react-bootstrap";
import {useGetAllCategories} from "../../../../../../../pages-hooks/AdminPage/Categories/useGetAllCategories.js";

const APPACategory = ({handleChange}) => {

    //list categories
    const categories = useGetAllCategories();

    return (
        <div className={"APPACategory"}>
            <FormSelect
                size={"sm"}
                className={"mb-1"}
                onChange={e => handleChange("category", e.target.value)}
            >
                <option hidden>Выберите категорию</option>
                {
                    categories?.map(elem => (
                        <option value={elem.link} key={elem.link}>
                            {elem.title}
                        </option>
                    ))
                }
            </FormSelect>
        </div>
    );
};

export default APPACategory;
