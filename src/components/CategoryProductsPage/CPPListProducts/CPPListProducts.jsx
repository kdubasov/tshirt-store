import React from 'react';
import "./CPPListProducts.css";
import ProductCard from "../../../general-components/ProductCard/ProductCard.jsx";

const CPPListProducts = ({data}) => {

    return (
        <div className={"CPPListProducts"}>
            {
                data.map(elem => (
                    <ProductCard key={elem.id} data={elem} />
                ))
            }
        </div>
    );
};

export default CPPListProducts;
