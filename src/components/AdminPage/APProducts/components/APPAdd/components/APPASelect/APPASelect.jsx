import React, {useState} from 'react';
import {Badge, Button} from "react-bootstrap";
import "./APPASelect.css";

const APPASelect = ({handleChange,title,data,input}) => {

    const [selectSize, setSelectSize] = useState([]);

    const handleSelect = value => {
        const index = selectSize.indexOf(value)
        if (index === -1){
            setSelectSize([...selectSize,value])
            handleChange(input,[...selectSize,value])
        }else {
            setSelectSize([...selectSize.filter(elem => elem !== value)])
            handleChange(input,[...selectSize.filter(elem => elem !== value)])
        }
    }

    return (
        <div className={"APPASizes"}>
            <Badge className={"w-100"}>{title}</Badge>

            {
                data.map(elem => (
                    <Button
                        variant={"outline-secondary"}
                        key={elem}
                        onClick={() => handleSelect(elem)}
                        active={selectSize.includes(elem)}
                    >
                        {elem}
                    </Button>
                ))
            }
        </div>
    );
};

export default APPASelect;
