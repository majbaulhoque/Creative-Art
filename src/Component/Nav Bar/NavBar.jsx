import { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../../../src/assets/Css/index.css';
import Logo from '../Logo';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleMouseEnter = (dropdown) => {
        setOpenDropdown(dropdown);
    };

    const handleMouseLeave = () => {
        setOpenDropdown(null);
    };

    return (
        <div className='d-flex justify-content-around align-items-center z-3 sticky-top nav-container'>
            <div>
                <Logo />
            </div>
            <div className='navbar-container'>
                <Navbar expand="lg">
                    <Container className='justify-content-end text-end'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto fw-bolder text-dark">
                                <NavDropdown
                                    className="text-dark custom-dropdown custom-nav-dropdown text-decoration-none"
                                    title={
                                        <NavLink to="/" className="text-dark text-decoration-none" end>
                                            Home
                                        </NavLink>
                                    }
                                    show={openDropdown === 'home'}
                                    onMouseEnter={() => handleMouseEnter('home')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <NavDropdown.Item as={Link} to="/about">About Us</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/whyUs">Why Us</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/vision">Our Vision</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/curriculum">Our Curriculum</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown
                                    className="text-dark custom-dropdown  text-decoration-none"
                                    title={
                                        <NavLink to="/classes" className="text-dark custom-nav-dropdown text-decoration-none" end>
                                            Classes
                                        </NavLink>
                                    }
                                    show={openDropdown === 'classes'}
                                    onMouseEnter={() => handleMouseEnter('classes')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <NavDropdown.Item as={Link} to="/aboutOurClasses">About Our Classes</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/fineArt">Fine Art</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/visualArt">Visual Art</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/social-presentation">Social Presentation</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/digital-art">Digital Art</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/adults-development">Adults Development</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/art-for-senior">Art For Senior</NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link as={Link} to="/events" className='text-dark' onMouseEnter={handleMouseLeave}>
                                    Events
                                </Nav.Link>

                                <Nav.Link as={Link} to="/contact" className='text-dark' onMouseEnter={handleMouseLeave}>
                                    Contact Us
                                </Nav.Link>

                                {/* External links for social media */}
                                <Nav.Link href="https://www.instagram.com/creativeartanddesigninc" target="_blank" rel="noopener noreferrer">
                                    <img src='/Images/instagram.png' height={30} alt="Instagram" />
                                </Nav.Link>

                                <Nav.Link href="mailto:example@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <img src='/Images/gmail.png' height={30} alt="Gmail" />
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default NavBar;
