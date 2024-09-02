import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../../../src/assets/Css/index.css'
import Logo from '../Logo';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate()

    return (
        <div className='d-flex justify-content-around align-items-center z-3 sticky-top nav-container' >
            <div>
                <Logo />
            </div>
            <div className='navbar-container'>
                <Navbar expand="lg" className="">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto fw-bolder text-dark">
                                <NavDropdown className='text-dark' onClick={() => navigate('/')} title="Home" href="/" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
                                    <NavDropdown.Item href="/whyUs">
                                        Why Us
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/vision">Our Vision</NavDropdown.Item>
                                    <NavDropdown.Item href="/curriculum">
                                        Our curriculum
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className='text-dark' title="Classes" href="/curriculum" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Adults</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Teens
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Kids</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#home" className='text-dark'>Workshop</Nav.Link>
                                <Nav.Link href="#link" className='text-dark'>Products</Nav.Link>
                                <Nav.Link href="#link" className='text-dark'>Contact Us</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default NavBar;