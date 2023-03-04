import React from 'react';
import "./PCSlider.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import {useGetProductsImages} from "../../../../pages-hooks/AdminPage/Products/useGetProductsImages.js";

const PCSlider = ({productId}) => {

    //images list
    const images = useGetProductsImages(productId);

    return (
        <Swiper
            pagination={{dynamicBullets: true,}}
            modules={[Pagination]}
            className="PCSlider"
        >
            {
                images.map(elem => (
                    <SwiperSlide key={elem.link}>
                        <img src={elem.link} alt={elem.metaData.name} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default PCSlider;
