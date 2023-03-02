import React, {useState} from 'react';
import {useUserAuth} from "../../context-providers/AuthContextProvider.jsx";
import { sendEmailVerification } from "firebase/auth";
import {Badge, Button, Container, ListGroup, ListGroupItem} from "react-bootstrap";
import {authDB} from "../../database/firebase-connect.js";
import {useDispatch} from "react-redux";
import {setNote} from "../../redux-store/slices/notificationsSlice.js";
import {NT_AUTH_EMAIL_VERIFY, NT_AUTH_EMAIL_VERIFY_ERROR} from "../../constants/notes/auth.js";
import {handleClearNotes} from "../../general-functions/redux-functions/handleClearNotes.js";

const UserProfilePage = () => {

    const dispatch = useDispatch();
    const { user, handleLogOut } = useUserAuth();
    const [verifyEmail, setVerifyEmail] = useState(user.emailVerified);

    //Send a user a verification email
    const verificationEmail = () => {
        sendEmailVerification(authDB.currentUser)
            .then(() => {
                setVerifyEmail(true)
                dispatch(setNote(NT_AUTH_EMAIL_VERIFY))
            })
            .catch(() => dispatch(setNote(NT_AUTH_EMAIL_VERIFY_ERROR)))
            .finally(() => handleClearNotes(dispatch))
    }

    return (
        <Container className={"UserProfilePage py-3"}>
            <Badge>Профиль пользователя</Badge>

            <ListGroup>
                <ListGroupItem>{user.displayName}</ListGroupItem>
                <ListGroupItem>{user.email}</ListGroupItem>
                <ListGroupItem>
                    Емаил подтвержден:
                    <Badge className={"mx-2"}>
                        {user.emailVerified ? "Да" : "Нет"}
                    </Badge>
                </ListGroupItem>
                <ListGroupItem>{user?.metadata?.creationTime}</ListGroupItem>
            </ListGroup>

            <div className="border p-3 mt-2 border">
                <Button onClick={handleLogOut} size={"sm"} variant={"danger"}>
                    Выйти
                </Button>

                {
                    !user.emailVerified &&
                    <Button disabled={verifyEmail} onClick={verificationEmail} size={"sm"} className={"mx-2"}>
                        {verifyEmail ? "Письмо отправлено!" : "Подтвердить почту"}
                    </Button>
                }

                <Button size={"sm"} variant={"secondary"}>
                    Редактировать пароль
                </Button>
            </div>
        </Container>
    );
};

export default UserProfilePage;
