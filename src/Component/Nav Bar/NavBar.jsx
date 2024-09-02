import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../../../src/assets/Css/index.css'
import Logo from '../Logo';

const NavBar = () => {
    return (
        <div className='d-flex justify-content-around align-items-center fixed-top nav-container' >
            <div>
                <Logo />
            </div>
            <div className='navbar-container'>
                <Navbar expand="lg" className="">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Home" href="/" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Why Us
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Our Vision</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">
                                        Our curriculum
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Classes" href="/" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Adults</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Teens
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Kids</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#home">Workshop</Nav.Link>
                                <Nav.Link href="#link">Products</Nav.Link>
                                <Nav.Link href="#link">Contact Us</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default NavBar;