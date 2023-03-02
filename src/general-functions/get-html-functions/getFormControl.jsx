import {FormControl} from "react-bootstrap";
import React from "react";

export const getFormControl = (text,input,type,data,handleChange,req = true) => {
    return (
        <FormControl
            placeholder={text}
            required={req}
            type={type}
            value={data[input]}
            onChange={e => handleChange(input,e.target.value)}
        />
    )
}
