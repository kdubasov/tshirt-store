import React, {useEffect, useState} from 'react';
import {Badge, Container} from "react-bootstrap";
import {useGetCategoryProducts} from "../../pages-hooks/AdminPage/Products/useGetCategoryProducts.js";
import {useLocation} from "react-router-dom";
import CPPListProducts from "../../components/CategoryProductsPage/CPPListProducts/CPPListProducts.jsx";
import CPPSort from "../../components/CategoryProductsPage/CPPSort/CPPSort.jsx";

const CategoryProductsPage = () => {

    const location = useLocation();
    const productsList = useGetCategoryProducts(location.pathname);
    const [products, setProducts] = useState([]);
    const [sort, setSort] = useState("");

    const handleSort = () => {
        if (sort === "new"){
            setProducts(products.sort((a,b) => b.dateNoRedact - a.dateNoRedact));
        }
        if (sort === "old"){
            setProducts(products.sort((a,b) => a.dateNoRedact - b.dateNoRedact));
        }
        if (sort === "cheap"){
            setProducts(products.sort((a,b) => Number(a.price) - Number(b.price)));
        }
        if (sort === "expensive"){
            setProducts(products.sort((a,b) => Number(b.price) - Number(a.price)));
        }
        if (sort === "sale"){
            setProducts(products.sort((a,b) => Number(b.sale) - Number(a.sale)));
        }
        if (sort === "availability"){
            setProducts(products.filter(elem => elem.availability));
        }
        if (sort === "default"){
            setProducts(productsList);
        }
    }

    useEffect(() => {
        //если товары еще не занесены в стейт то заносим
        if (productsList.length && !products.length) setProducts(productsList);

        //если есть метод сортировки то добавляем функцию
        if (sort) handleSort();
    }, [sort,productsList.length,products.length]);


    //если товаров нет то выводим
    if (!products.length){
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
                products.length > 3 &&
                <CPPSort sort={sort} setSort={setSort} />
            }

            <CPPListProducts
                data={products}
            />
        </Container>
    )
};

export default CategoryProductsPage;
