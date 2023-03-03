import React from 'react';
import "./APCList.css";
import {useGetAllCategories} from "../../../../../pages-hooks/AdminPage/Categories/useGetAllCategories.js";
import {Badge} from "react-bootstrap";

// swiper
import {Swiper, SwiperSlide} from "swiper/react";
// import required modules
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import APCListItem from "./components/APCListItem/APCListItem.jsx";


const APCList = () => {

    //all categories list
    const data = useGetAllCategories();

    return (
        <div className={"APCList"}>

            <Badge bg={"success"} className={"w-100 mb-1"}>
                Список категорий ({data.length})
            </Badge>

            {//check categories length for text about no data
                !data.length &&
                <h6 className={"fw-bold text-muted text-center"}>
                    Список категорий пуст
                </h6>
            }

            {//check categories length for slider
                Boolean(data.length) &&
                <Swiper pagination={{dynamicBullets: true}} modules={[Pagination]}>
                    {//show categories in slider
                        data.map(elem => (
                            <SwiperSlide key={elem.link}>
                                {/*item here!*/}
                                <APCListItem elem={elem} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            }
        </div>
    );
};

export default APCList;
