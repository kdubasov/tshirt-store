import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./NavbarTop.css";
import {LINK_DEF, LINK_LOGIN, LINK_SIGNUP} from "../../constants/links.js";

const NavbarTop = () => {
    return (
        <Navbar className={"NavbarTop"} bg="primary" variant="dark">
            <Container>

                <Link className={"logo"} to={LINK_DEF}>
                    Logo
                </Link>

                <Nav className="me-auto">
                    <Link to={LINK_LOGIN}>Вход</Link>
                    <Link to={LINK_SIGNUP}>Регистрация</Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarTop;
