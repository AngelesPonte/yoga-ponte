import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import logo from '../../../src/img/lylogo.png';
export const Navbare = (props) => {
      return(
        <header >
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <img src={logo} className="logo" alt="Live Yogi" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#library">Full Library</Nav.Link>
            <Nav.Link href="#method">My Method</Nav.Link>
            <Nav.Link href="#practice">My Practice</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="#deets">Sign Up</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                Sign In
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
            
        </header>
    )
}

//<img src="" alt="logo" />
//<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//<Navbar.Brand href="">LiveYogi</Navbar.Brand>
//<Nav className="mr-auto">
//    <Nav.Link href="#home">Full Library</Nav.Link>
 //   <Nav.Link href="#method">Method</Nav.Link>
//    <Nav.Link href="#practice">My Practice</Nav.Link>
//</Nav>
//<div>
 //   <span>
 //   <img src="" alt="Cart" />
 //   <p>{props.cartQty}</p>
 //   </span>
//    <img src={props.avatar} alt="Cart" />
//</div>
//</Navbar>
//