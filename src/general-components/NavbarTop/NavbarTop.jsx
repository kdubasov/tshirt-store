import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./NavbarTop.css";
import {LINK_DEF, LINK_LOGIN, LINK_SIGNUP, LINK_USER_PROFILE} from "../../constants/links.js";
import {useUserAuth} from "../../context-providers/AuthContextProvider.jsx";

const NavbarTop = () => {

    const { user } = useUserAuth();

    return (
        <Navbar className={"NavbarTop"} bg="primary" variant="dark">
            <Container>

                <Link className={"logo"} to={LINK_DEF}>
                    Logo
                </Link>

                <Nav className="me-auto">
                    {
                        !user &&
                        <>
                            <Link to={LINK_LOGIN}>Вход</Link>
                            <Link to={LINK_SIGNUP}>Регистрация</Link>
                        </>
                    }

                    {user && <Link to={LINK_USER_PROFILE}>{user.email}</Link>}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarTop;
