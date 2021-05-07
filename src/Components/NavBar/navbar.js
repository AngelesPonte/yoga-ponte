import { Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import logo from '../../../src/img/lylogo.png';
import {CartWidget} from '../CartWidget/cartWidget'

export const Navbare = () => {
      return(
        <div>
        <header className="centre">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbare">
                <img src={logo} className="logo" alt="Live Yogi" />
            
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  id="responsive-navbar-nav">
            <Nav className="mr-auto ">
                <Nav.Link href="#library">Full Library</Nav.Link>
                <Nav.Link href="#method">My Method</Nav.Link>
                <Nav.Link href="#practice">My Practice</Nav.Link>
            </Nav>
            <CartWidget/>
            <Nav>
            <Nav.Link href="#deets">Sign Up</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">Sign In</Nav.Link>
            </Nav>
        </Navbar.Collapse>
   
        </Navbar>
        </header>
        </div>
    )}

