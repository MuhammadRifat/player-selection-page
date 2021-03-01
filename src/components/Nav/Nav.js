import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';

const Nav = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className="justify-content-center">
                <Navbar.Brand href="/team-selection-page">
                    Player Selection Page
                </Navbar.Brand>
            </Navbar>
        </div>
    );
};

export default Nav;