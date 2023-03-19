import React from 'react';
import {DropdownButton, Dropdown} from "react-bootstrap";
import {CPPSortData} from "./CPPSortData.js";

const CPPSort = ({sort,setSort}) => {

    return (
        <DropdownButton size={"sm"} title="Сортировать" className={"my-2"}>
            {
                CPPSortData.map(elem => (
                    <Dropdown.Item
                        onClick={() => setSort(elem.value)}
                        key={elem.id}
                        active={elem.value === sort}
                    >
                        {elem.text}
                    </Dropdown.Item>
                ))
            }
            {
                sort && sort !== "default" &&
                <Dropdown.Item onClick={() => setSort("default")}>
                    Сбросить фильтры
                </Dropdown.Item>
            }
        </DropdownButton>
    );
};

export default CPPSort;
