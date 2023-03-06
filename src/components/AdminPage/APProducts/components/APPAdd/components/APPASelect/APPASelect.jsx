import React, {useState} from 'react';
import {Badge, Button} from "react-bootstrap";
import "./APPASelect.css";

const APPASelect = ({handleChange,title,data,input,nowData = false}) => {

    const [selectValue, setSelectValue] = useState(nowData ? nowData : []);
    console.log(selectValue,"APPASelect nowData")

    const handleSelect = value => {
        const index = selectValue.indexOf(value)
        if (index === -1){
            setSelectValue([...selectValue,value])
            handleChange(input,[...selectValue,value])
        }else {
            setSelectValue([...selectValue.filter(elem => elem !== value)])
            handleChange(input,[...selectValue.filter(elem => elem !== value)])
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
                        active={selectValue.includes(elem)}
                    >
                        {elem}
                    </Button>
                ))
            }
        </div>
    );
};

export default APPASelect;
