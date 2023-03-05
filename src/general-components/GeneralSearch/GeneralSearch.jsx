import React, {useEffect, useState} from 'react';
import {FormControl} from "react-bootstrap";
import {useGetAllProducts} from "../../pages-hooks/AdminPage/Products/useGetAllProducts.js";
import {useGetAllCategories} from "../../pages-hooks/AdminPage/Categories/useGetAllCategories.js";
import "./GeneralSearch.css";
import GSResult from "./components/GSResult/GSResult.jsx";

const GeneralSearch = () => {

    //query state
    const [query, setQuery] = useState("");

    //products data (all)
    const products = useGetAllProducts();
    //products data (sorted)
    const [productsSort, setProductsSort] = useState(products);

    //categories data (all)
    const categories = useGetAllCategories();
    //categories data (sorted)
    const [categoriesSort, setCategoriesSort] = useState(categories);

    useEffect(() => {
        const prodsChange = products.filter(elem => elem.title.toLowerCase().includes(query.toLowerCase()));
        const categChange = categories.filter(elem => elem.title.toLowerCase().includes(query.toLowerCase()));
        setProductsSort(prodsChange)
        setCategoriesSort(categChange)
    },[query])

    return (
        <div className={"GeneralSearch"}>
            {/*поле ввода запроса*/}
            <FormControl
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder={"Поиск по товарам и категориям..."}
            />

            {//если запрос есть то показываем результат
                query &&
                <GSResult
                    products={productsSort.slice(0,5)}
                    categories={categoriesSort.slice(0,5)}
                />
            }
        </div>
    );
};

export default GeneralSearch;
