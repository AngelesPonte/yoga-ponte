import { Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import logo from '../../../src/img/lylogo.png';
import {CartWidget} from '../CartWidget/cartWidget';
import { Link } from 'react-router-dom';

export const Navbare = () => {
      return(
        <div>
        <header className="centre">
        <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbare">
                <Link to="/"><img src={logo} className="logo" alt="Live Yogi"/></Link>
            
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  id="responsive-navbar-nav">
            <Nav className="mr-auto navOptions">
                <Nav.Link as={Link} to="FullLibrary">Full Library</Nav.Link>
                <Nav.Link href="#method">The Method</Nav.Link>
                <Nav.Link href="#practice">My Practice</Nav.Link>
            </Nav>
            <CartWidget/>
            <Nav className="navOptions">
            <Nav.Link href="#deets">Start free trial</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">Sign In</Nav.Link>
            </Nav>
        </Navbar.Collapse>
   
        </Navbar>
        </header>
        </div>
    )}

