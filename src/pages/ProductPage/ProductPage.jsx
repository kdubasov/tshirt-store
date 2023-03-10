import React from 'react';
import {useLocation} from "react-router-dom";
import {Badge, Container} from "react-bootstrap";
import {getProductFromPath} from "../../general-functions/getProductFromPath.js";
import {useGetOneProduct} from "../../pages-hooks/AdminPage/Products/useGetOneProduct.js";
import PCSlider from "../../general-components/ProductCard/components/PCSlider/PCSlider.jsx";
import "./ProductPage.css";
import PPMainContent from "../../components/ProductPage/PPMainContent/PPMainContent.jsx";
import PPAdditionalData from "../../components/ProductPage/PPAdditionalData/PPAdditionalData.jsx";

const ProductPage = () => {

    const location = useLocation();
    const locationSorted = getProductFromPath(location.pathname);
    const productData = useGetOneProduct(locationSorted);

    if (Boolean(Object.values(productData).length))
    return (
        <Container className={"ProductPage py-3"}>
            <Badge>Страница товара</Badge>

            <div className="top-content">
                <PCSlider productId={productData.id} />
                <PPMainContent data={productData} />
            </div>

            <PPAdditionalData data={productData} />
        </Container>
    );
};

export default ProductPage;
