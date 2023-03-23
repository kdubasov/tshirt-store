import React, {useState} from 'react';
import {Badge, Button, Form, FormControl} from "react-bootstrap";
import "./PPNewReview.css";

const PPNewReview = () => {

    const [stars, setStars] = useState("");
    const [text, setText] = useState("");

    const handleSend = e => {
        e.preventDefault();
        console.log({
            stars: stars,
            text: text,
        })
    }

    return (
        <div className={"PPNewReview"}>

            <Badge className={"w-100 text-center mb-2"}>
                Вы можете оставить отзыв о товаре
            </Badge>

            <Form onSubmit={handleSend}>
                <FormControl
                    value={stars}
                    onChange={e => setStars(e.target.value)}
                    size={"sm"}
                    className={"mb-1"}
                    placeholder={"Оценка от 1 до 5"}
                />

                <FormControl
                    value={text}
                    onChange={e => setText(e.target.value)}
                    size={"sm"}
                    as={"textarea"}
                    className={"mb-1"}
                    placeholder={"Опишите ваши впечатления о товаре"}
                />

                <Button variant={"secondary"} type={"submit"} size={"sm"}>
                    Отправить
                </Button>
            </Form>
        </div>
    );
};

export default PPNewReview;
