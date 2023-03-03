export const NT_AUTH_SIGNUP = {
    show: true,
    text: "Аккаунт успещно зарегестрирован.",
    title: "Успешно!",
    variant: "success",
}

export const NT_AUTH_SIGNUP_ERROR = error => {
    return {
        show: true,
        text: error,
        title: "Ошибка регистрации!",
        variant: "danger",
    }
}

export const NT_AUTH_SIGNUP_PASS_ERROR = {
    show: true,
    text: "Пароли не совпадают.",
    title: "Ошибка пароля!",
    variant: "danger",
}

export const NT_AUTH_SIGNUP_PASS_CHARS_ERROR = {
    show: true,
    text: "Пароль должен быть минимум 8 символов.",
    title: "Ошибка пароля!",
    variant: "danger",
}

export const NT_AUTH_LOGIN = {
    show: true,
    text: "Аккаунт успещно авторизован.",
    title: "Успешно!",
    variant: "success",
}

export const NT_AUTH_LOGIN_ERROR = error => {
    return {
        show: true,
        text: error,
        title: "Ошибка авторизации!",
        variant: "danger",
    }
}

export const NT_AUTH_EMAIL_VERIFY  = {
    show: true,
    text: "Подтверждение отправлено на вашу почту.",
    title: "Письмо отправлено!",
    variant: "success",
}

export const NT_AUTH_EMAIL_VERIFY_ERROR  = {
    show: true,
    text: "Ошибка отправки пиьсма с подтверждением.",
    title: "Письмо НЕ отправлено!",
    variant: "danger",
}

export const NT_AUTH_PASS_RESET  = {
    show: true,
    text: "Пароль успешно обновлен.",
    title: "Успешно!",
    variant: "success",
}

export const NT_AUTH_PASS_RESET_ERROR = error => {
    return {
        show: true,
        text: error,
        title: "Ошибка при обновлении пароля!",
        variant: "danger",
    }
}

export const NT_AUTH_PASS_EMAIL  = {
    show: true,
    text: "Письмо для восстановления пароля успешно отправлено.",
    title: "Отправлено!",
    variant: "success",
}

export const NT_AUTH_PASS_EMAIL_ERROR = error => {
    return {
        show: true,
        text: error,
        title: "Ошибка при отправке письма!",
        variant: "danger",
    }
}