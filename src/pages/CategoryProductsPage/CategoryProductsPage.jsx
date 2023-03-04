import React from 'react';
import {Badge, Container} from "react-bootstrap";
import {useGetCategoryProducts} from "../../pages-hooks/AdminPage/Products/useGetCategoryProducts.js";
import {useLocation} from "react-router-dom";
import {getProductFromPath} from "../../general-functions/getProductFromPath.js";

const CategoryProductsPage = () => {

    const location = useLocation();
    const locationSorted = getProductFromPath(location.pathname);
    const productsList = useGetCategoryProducts(locationSorted.category);
    console.log(productsList)

    //если товаров нет то выводим другое содержание
    if (!productsList.length){
        return (
            <Container className={"CategoryProductsPage py-3"}>
                <Badge>Товары категории</Badge>

                <p className="small opacity-50">
                    Товары не найдены
                </p>
            </Container>
        )
    }

    return (
        <Container className={"CategoryProductsPage py-3"}>
            <Badge>Товары категории</Badge>


        </Container>
    )
};

export default CategoryProductsPage;
