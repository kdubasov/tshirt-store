import React, {useState} from 'react';
import {useUserAuth} from "../../context-providers/AuthContextProvider.jsx";
import { sendEmailVerification } from "firebase/auth";
import {Badge, Button, Container, ListGroup, ListGroupItem} from "react-bootstrap";
import {authDB} from "../../database/firebase-connect.js";
import {useDispatch} from "react-redux";
import {setNote} from "../../redux-store/slices/notificationsSlice.js";
import {NT_AUTH_EMAIL_VERIFY, NT_AUTH_EMAIL_VERIFY_ERROR} from "../../constants/notes/auth.js";
import {handleClearNotes} from "../../general-functions/redux-functions/handleClearNotes.js";
import UpdatePassword from "../../components/UserProfilePage/UpdatePassword/UpdatePassword.jsx";
import UserOrders from "../../components/UserProfilePage/UserOrders/UserOrders.jsx";
import LogOut from "../../components/UserProfilePage/LogOut/LogOut.jsx";

const UserProfilePage = () => {

    const dispatch = useDispatch();
    const { user } = useUserAuth();
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

            {/*orders*/}
            <UserOrders />

            <div className="d-flex border p-3 mt-2 border">
                <LogOut />

                {
                    !user.emailVerified &&
                    <Button
                        disabled={Boolean(verifyEmail)}
                        onClick={verificationEmail}
                        size={"sm"}
                        className={"mx-2"}
                    >
                        {verifyEmail ? "Письмо отправлено!" : "Подтвердить почту"}
                    </Button>
                }

                {/*update password component*/}
                <UpdatePassword />
            </div>
        </Container>
    );
};

export default UserProfilePage;
