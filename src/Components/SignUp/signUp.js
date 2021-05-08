import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signUp.css';
import vrikFarm from '../../../src/img/pics/vrikFarm.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const SignUp = () => {
  return (
    <div>
        <h3 className="home">Sign Up to a Yogi Life</h3>
    <Container fluid>
        <Row className="backgroundSignUp" >
         <Col>
            <div>
                <h3 className="center title">Try it for 3 days</h3>
            </div>
            <Form className="mainDescription">
                <li class="liCheck">Create an account</li>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I Accept the terms & conditions" />
                </Form.Group>
                <Button variant="primary" type="submit">Create an account</Button>
            </Form>
         </Col>
         <Col>
            <img src={vrikFarm} className="signUp" alt="Sigup"/>
         </Col>
        </Row>
    </Container>
    </div>
    
    
  )
}


