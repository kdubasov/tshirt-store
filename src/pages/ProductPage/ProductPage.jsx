import React from 'react';
import {useLocation} from "react-router-dom";
import {Badge, Container} from "react-bootstrap";
import {getProductFromPath} from "../../general-functions/getProductFromPath.js";
import {useGetOneProduct} from "../../pages-hooks/AdminPage/Products/useGetOneProduct.js";

const ProductPage = () => {

    const location = useLocation();
    const locationSorted = getProductFromPath(location.pathname);
    const productData = useGetOneProduct(locationSorted);
    console.log(productData,"ProductPage data")

    if (Boolean(Object.values(productData).length))
    return (
        <Container className={"ProductPage py-3"}>
            <Badge>Страница товара</Badge>

            <br/>
            <Badge>{productData.title}</Badge>
        </Container>
    );
};

export default ProductPage;
