import React from 'react';
import {Badge, Container} from "react-bootstrap";
import {useGetFavorites} from "../../pages-hooks/ProductPage/favorites/useGetFavorites.js";
import ProductCard from "../../general-components/ProductCard/ProductCard.jsx";
import "./FavoritesPage.css";

const FavoritesPage = () => {

    //data favorites products from database
    const data = useGetFavorites();

    return (
        <Container className={"FavoritesPage py-3"}>
            <Badge>Избранные товары</Badge>

            {//if !products in favorites
                !data.length &&
                <h6>Список товаров пуст!</h6>
            }

            <div className="content-products">
                {
                    Boolean(data.length) &&
                    data.map(elem => (
                        <ProductCard key={elem.id} data={elem} />
                    ))
                }
            </div>

        </Container>
    );
};

export default FavoritesPage;
