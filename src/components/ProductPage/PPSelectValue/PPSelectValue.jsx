import React from 'react';
import {Badge, Button} from "react-bootstrap";
import "./PPSelectValue.css";

const PPSelectValue = ({title,input,data,orderData,handleChange}) => {

    return (
        <div className={"PPSelectValue"}>
            <Badge className={"w-100"}>{title}</Badge>

            <div className="content">
                {
                    data.map(elem => (
                        <Button
                            key={elem}
                            size={"sm"}
                            variant={"outline-secondary"}
                            onClick={() => handleChange(input, elem)}
                            active={orderData === elem}
                        >
                            {elem}
                        </Button>
                    ))
                }
            </div>
        </div>
    );
};

export default PPSelectValue;
