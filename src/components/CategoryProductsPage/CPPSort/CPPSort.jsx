import React from 'react';
import {DropdownButton, Dropdown} from "react-bootstrap";
import {CPPSortData} from "./CPPSortData.js";

const CPPSort = () => {

    return (
        <DropdownButton size={"sm"} title="Сортировать" className={"my-2"}>
            {
                CPPSortData.map(elem => (
                    <Dropdown.Item key={elem.id}>
                        {elem.text}
                    </Dropdown.Item>
                ))
            }
        </DropdownButton>
    );
};

export default CPPSort;
