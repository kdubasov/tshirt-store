export const NT_DELETE = {
    show: true,
    text: "Элемент удален.",
    title: "Успешно!",
    variant: "success",
}

export const NT_DELETE_ERROR = {
    show: true,
    text: "Элемент не удален.",
    title: "Ошибка!",
    variant: "danger",
}

export const NT_FEEDBACK = {
    show: true,
    text: "Форма успешно отправлена.",
    title: "Успешно!",
    variant: "success",
}

export const NT_FEEDBACK_ERROR = error => {
    return {
        show: true,
        text: error,
        title: "Ошибка отправки формы!",
        variant: "danger",
    }
}