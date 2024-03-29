import React from 'react';
import {useLocation} from "react-router-dom";
import {Badge, Container} from "react-bootstrap";
import {useGetOneProduct} from "../../pages-hooks/AdminPage/Products/useGetOneProduct.js";
import PCSlider from "../../general-components/ProductCard/components/PCSlider/PCSlider.jsx";
import "./ProductPage.css";
import PPMainContent from "../../components/ProductPage/PPMainContent/PPMainContent.jsx";
import PPAdditionalData from "../../components/ProductPage/PPAdditionalData/PPAdditionalData.jsx";
import PPNewReview from "../../components/ProductPage/PPNewReview/PPNewReview.jsx";
import PPListReviews from "../../components/ProductPage/PPListReviews/PPListReviews.jsx";

const ProductPage = () => {

    const location = useLocation();
    const productData = useGetOneProduct(location.pathname);

    if (Boolean(Object.values(productData).length))
    return (
        <Container className={"ProductPage py-3"}>
            <Badge>Страница товара</Badge>

            <div className="top-content">
                <PCSlider productId={productData.id} />
                <PPMainContent data={productData} />
            </div>

            <PPAdditionalData data={productData} />

            <h3>Отзывы</h3>
            <div className="reviews-container">
                <PPNewReview data={productData} />
                <PPListReviews data={productData} />
            </div>
        </Container>
    );
};

export default ProductPage;
