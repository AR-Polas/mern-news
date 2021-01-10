import React from 'react';
import { Container } from 'react-bootstrap';
import MenuBar from '../../Navbar/MenuBar';

const Header = () => {
    return (
        <>
            <div className="header-nav">
                <Container>
                    <MenuBar />
                </Container>
            </div>
            <div className="d-flex flex-column text-center my-3 header-text ">
                <h1>WORLD NEWS</h1>
                <h3 className="text-secondary">Politics around the global</h3>
            </div>
        </>
    );
};

export default Header;