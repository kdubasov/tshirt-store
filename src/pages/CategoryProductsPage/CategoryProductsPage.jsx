import React, {useState} from 'react';
import {Badge, Container} from "react-bootstrap";
import {useGetCategoryProducts} from "../../pages-hooks/AdminPage/Products/useGetCategoryProducts.js";
import {useLocation} from "react-router-dom";
import CPPListProducts from "../../components/CategoryProductsPage/CPPListProducts/CPPListProducts.jsx";
import CPPSort from "../../components/CategoryProductsPage/CPPSort/CPPSort.jsx";

const CategoryProductsPage = () => {

    const location = useLocation();
    const productsList = useGetCategoryProducts(location.pathname);
    const [sort, setSort] = useState("");

    const handleSort = () => {
        if (!productsList.length) return [];
        if (sort === "new"){
            return productsList.sort((a,b) => b.dateNoRedact - a.dateNoRedact)
        }
        if (sort === "old"){
            return productsList.sort((a,b) => a.dateNoRedact - b.dateNoRedact)
        }
        if (sort === "cheap"){
            return productsList.sort((a,b) => Number(a.price) - Number(b.price))
        }
        if (sort === "expensive"){
            return productsList.sort((a,b) => Number(b.price) - Number(a.price))
        }
        if (sort === "sale"){
            return productsList.sort((a,b) => Number(b.sale) - Number(a.sale))
        }
        if (sort === "availability"){
            return productsList.filter(elem => elem.availability);
        }
        if (sort === "default" || sort === ""){
            return productsList;
        }
    }

    //если товаров нет то выводим
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

    //если товары есть выводим
    return (
        <Container className={"CategoryProductsPage py-3"}>
            <Badge>Товары категории</Badge>

            {//если кол-во товаров категории больше трех то показываем сортировку
                productsList.length > 3 &&
                <CPPSort sort={sort} setSort={setSort} />
            }

            {/*в список товаров передаем уже отсортированный массив*/}
            <CPPListProducts
                data={handleSort()}
            />
        </Container>
    )
};

export default CategoryProductsPage;
