import React from 'react';
import {Badge, Container} from "react-bootstrap";
import {useGetCategoryProducts} from "../../pages-hooks/AdminPage/Products/useGetCategoryProducts.js";
import {useLocation} from "react-router-dom";
import {getProductFromPath} from "../../general-functions/getProductFromPath.js";
import CPPListProducts from "../../components/CategoryProductsPage/CPPListProducts/CPPListProducts.jsx";

const CategoryProductsPage = () => {

    const location = useLocation();
    const locationSorted = getProductFromPath(location.pathname);
    const productsList = useGetCategoryProducts(locationSorted.category);

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

    //если товары есть выводим это
    return (
        <Container className={"CategoryProductsPage py-3"}>
            <Badge>Товары категории</Badge>

            <CPPListProducts data={productsList} />
        </Container>
    )
};

export default CategoryProductsPage;
