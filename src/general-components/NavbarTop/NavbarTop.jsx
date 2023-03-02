import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./NavbarTop.css";

const NavbarTop = () => {
    return (
        <Navbar className={"NavbarTop"} bg="primary" variant="dark">
            <Container>

                <Link className={"logo"} to={"/"}>
                    Logo
                </Link>

                <Nav className="me-auto">
                    <Link to={"/login"}>Вход</Link>
                    <Link to={"/signUp"}>Регистрация</Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarTop;
