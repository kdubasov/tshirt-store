import {FormControl} from "react-bootstrap";
import React from "react";

export const getFormControl = (text,input,type,data,handleChange) => {
    return (
        <FormControl
            placeholder={text}
            required={true}
            type={type}
            value={data[input]}
            onChange={e => handleChange(input,e.target.value)}
        />
    )
}
