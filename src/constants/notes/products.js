export const NT_ADD_PRODUCT = {
    show: true,
    text: "Товар успешно добавлен.",
    title: "Добавлено!",
    variant: "success",
}

export const NT_ADD_PRODUCT_ERROR = error => {
    return {
        show: true,
        text: error,
        title: "Ошибка!",
        variant: "danger",
    }
}

export const NT_ADD_PRODUCT_ERROR_INPUTS = {
    show: true,
    text: "Вы должны заполнить все поля (кроме харакатеристик и скидки).",
    title: "Ошибка!",
    variant: "danger",
}

export const NT_ADD_PRODUCT_REDACT = {
    show: true,
    text: "Товар успешно отредактирован!",
    title: "Успешно!",
    variant: "success",
}

export const NT_ADD_PRODUCT_ERROR_REDACT = error => {
    return {
        show: true,
        text: error,
        title: "Ошибка!",
        variant: "danger",
    }
}

export const NT_FAVORITE_PRODUCT_ADD = {
    show: true,
    text: "Товар успешно добавлен в избранное!",
    title: "Успешно!",
    variant: "success",
}

export const NT_FAVORITE_PRODUCT_ADD_ERROR = {
    show: true,
    text: "Товар не добавлен в избранное!",
    title: "Ошибка!",
    variant: "danger",
}

export const NT_BASKET_ADD_ERROR_REQ = {
    show: true,
    text: "Вы должны заполнить все поля заказа для того чтобы добавить товар в корзину!",
    title: "Ошибка!",
    variant: "danger",
}

export const NT_BASKET_ADD_ERROR = {
    show: true,
    text: "Товар не добавлен в корзину!",
    title: "Ошибка!",
    variant: "danger",
}

export const NT_BASKET_ADD = {
    show: true,
    text: "Товар успешно добавлен в корзину!",
    title: "Успешно!",
    variant: "success",
}