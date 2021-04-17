import './App.css';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="">LiveYogi</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Full Library</Nav.Link>
      <Nav.Link href="#method">Method</Nav.Link>
      <Nav.Link href="#practice">My Practice</Nav.Link>
    </Nav>
      <Button variant="outline-info">Sign Up</Button>
      <Button variant="outline-info">Log In</Button>
  </Navbar>
  
    </div>
  );
}

export default App;
