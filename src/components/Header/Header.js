import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar sticky="top" className="nav-bar py-4 px-4" collapseOnSelect expand="lg" variant="light">
            <Container fluid>
                <Navbar.Brand as={HashLink} to="/home#home">
                    <span style={{ color: "#ffc107", marginRight: "2px", fontSize: "26px" }}>T</span>
                    <span style={{ color: "#2196f3", marginRight: "2px", fontSize: "26px" }}>R</span>
                    <span style={{ color: "#cd9581", marginRight: "2px", fontSize: "26px" }}>A</span>
                    <span style={{ color: "#ff5722", marginRight: "2px", fontSize: "26px" }}>V</span>
                    <span style={{ color: "#8e54f5", marginRight: "2px", fontSize: "26px" }}>E</span>
                    <span style={{ color: "#cd9581", marginRight: "2px", fontSize: "26px" }}>L</span>
                    <span style={{ color: "#cd9581", marginRight: "2px", fontSize: "26px" }}>L</span>
                    <span style={{ color: "#ffc107", marginRight: "2px", fontSize: "26px" }}>I</span>
                    <span style={{ color: "#e91e63", marginRight: "2px", fontSize: "26px" }}>C</span>
                    <span style={{ color: "#cd9581", marginRight: "2px", fontSize: "26px" }}>A</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#main-offerings-section">Main Offerings</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#team-section">Our Team</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#collaborations">Collaborations</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user.email ?
                                <div className="d-flex justify-content-center align-items-center">
                                    <NavDropdown title={user?.displayName || user?.email} id="collasible-nav-dropdown">
                                        <NavDropdown.Item as={Link} to="/manage-bookings">Manage all Bookings</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/my-bookings">My bookings</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/my-cart">My Cart</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/add-new-package">Add new package</NavDropdown.Item>
                                        <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                                    </NavDropdown>
                                    <img src={user.photoURL ? user.photoURL : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} style={{ width: "50px", height: "50px", borderRadius: "50%" }} alt="" />
                                </div>
                                :
                                <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;