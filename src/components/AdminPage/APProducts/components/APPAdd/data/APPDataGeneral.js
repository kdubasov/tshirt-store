import {APPDeliveryData} from "./APPDeliveryData.js";
import {APPSizesData} from "./APPSizesData.js";
import {APPColorsData} from "./APPColorsData.js";
import {APPPayData} from "./APPPayData.js";
import {APPGenderData} from "./APPGenderData.js";

export const APPDataGeneral = [
    {
        title: "Размеры",
        input: "sizes",
        data: APPSizesData,
    },
    {
        title: "Цвета",
        input: "colors",
        data: APPColorsData,
    },
    {
        title: "Доставка",
        input: "delivery",
        data: APPDeliveryData,
    },
    {
        title: "Оплата",
        input: "pay",
        data: APPPayData,
    },
    {
        title: "Пол",
        input: "gender",
        data: APPGenderData,
    },
];