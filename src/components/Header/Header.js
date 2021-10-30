import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar sticky="top" className="nav-bar py-3 px-4" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#home">Travellica</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home#home">HOME</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#about">ABOUT</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">SERVICES</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#doctors">DOCTORS</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#testimonials">TESTIMONIALS</Nav.Link>
                            <NavDropdown title="PAGES" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/add-new-offering">Add New Offering</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/achievements">ACHIEVEMENTS</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/faq">FAQ</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/emergency">EMERGENCY</NavDropdown.Item>

                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {
                                user.email ?
                                    <div className="d-flex">
                                        <Nav.Link as={Link} to="/manage-bookings">Manage all Bookings</Nav.Link>
                                        <Nav.Link as={Link} to="/my-bookings">My bookings</Nav.Link>
                                        <Nav.Link as={Link} to="/add-new-package">Add new package</Nav.Link>
                                        <Nav.Link onClick={logOut}><span style={{ color: "#0bcfce" }}> <span className="fs-6">{user?.displayName || user?.email}</span> LOGOUT</span></Nav.Link>
                                    </div>
                                    :
                                    <Nav.Link as={HashLink} to="/login"><span style={{ color: "#0bcfce" }}>LOGIN</span></Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;