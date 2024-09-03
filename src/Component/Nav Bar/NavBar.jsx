import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../../../src/assets/Css/index.css';
import Logo from '../Logo';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='d-flex justify-content-around align-items-center z-3 sticky-top nav-container'>
            <div>
                <Logo />
            </div>
            <div className='navbar-container'>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto fw-bolder text-dark">
                                <NavDropdown
                                    title={
                                        <Link to="/" className="text-dark text-decoration-none">
                                            Home
                                        </Link>
                                    }
                                    id="basic-nav-dropdown"
                                >
                                    <NavDropdown.Item as={Link} to="/about">About Us</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/whyUs">Why Us</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/vision">Our Vision</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/curriculum">Our Curriculum</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title={
                                    <Link to='/classes' className="text-dark text-decoration-none">
                                        Classes
                                    </Link>
                                }>
                                    <NavDropdown.Item as={Link} to="/curriculum/adults">About Our Classes</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/curriculum/teens">Fine Art</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/curriculum/kids">Visual Art</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/curriculum/kids">Social Presentation</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/curriculum/kids">Digital Art</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/curriculum/kids">Adults Development</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/curriculum/kids">Art For Senior</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} to="/workshop" className='text-dark'>Events</Nav.Link>
                                <Nav.Link as={Link} to="/products" className='text-dark'>Products</Nav.Link>
                                <Nav.Link as={Link} to="/contact" className='text-dark'>Contact Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default NavBar;
