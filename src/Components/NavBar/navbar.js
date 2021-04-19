import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

export const Navbare = (props) => {
      return(
        <header>
            <img src="" alt="logo" />
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="">LiveYogi</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Full Library</Nav.Link>
                    <Nav.Link href="#method">Method</Nav.Link>
                    <Nav.Link href="#practice">My Practice</Nav.Link>
                </Nav>
                <div>
                    <span>
                    <img src="" alt="Cart" />
                    <p>{props.cartQty}</p>
                    </span>
                    <img src={props.avatar} alt="Cart" />
                </div>
            </Navbar>
        </header>
    )
}