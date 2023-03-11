import React, {useState} from 'react';
import {Button, Spinner} from "react-bootstrap";
import {handleRedactProduct} from "../../../../../pages-functions/AdminPage/APPAdd/handleRedactProduct.js";

const BPPAmount = ({data}) => {

    const { amount } = data;
    const [loader, setLoader] = useState(false);

    const handleSetAmount = (type) => {
        setLoader(true)
        handleRedactProduct({
            ...data,
            amount: type === "minus" ? amount - 1 : amount + 1,
        }).then(() => setLoader(false))
    }


    //jsx
    if (loader) {
        return (
            <div className="BPPAmount">
                <Button disabled size={"sm"}>
                    <Spinner size={"sm"} />
                </Button>
            </div>
        )
    }

    return (
        <div className="BPPAmount">
            <div className="amount">
                <Button
                    onClick={() => handleSetAmount("minus")}
                    disabled={amount === 1}
                    size={"sm"}
                >
                    -
                </Button>

                <span>Кол-во: {amount}</span>

                <Button
                    onClick={() => handleSetAmount("plus")}
                    size={"sm"}
                >
                    +
                </Button>
            </div>
        </div>
    );
};

export default BPPAmount;
