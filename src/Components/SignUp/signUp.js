import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signUp.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const SignUp = () => {
  return (
    <div>
        <h3 className="home">Sign Up to a Yogi Life</h3>
    <Container>
        <Row className="backgroundSignUp" >
         <Col className="formStyle">
            <div>
                <h3 className="center title">Try it for 3 days</h3>
            </div>
            <Form className="mainDescription">
                <li className="liCheck">Create an account</li>
                <Form.Row className="formRow">
                    <Col><Form.Control placeholder="First name" /></Col>
                    <Col><Form.Control placeholder="Last name" /></Col>
                </Form.Row>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I Accept the terms & conditions" />
                </Form.Group>
                <Button variant="primary" type="submit" className="createAccount ">Create an account</Button>
          
                <li className="liCheck">Choose your membership</li>
                <li className="liCheck">Add payment method</li>
                </Form>
         </Col>
         <Col>
            <div className="signInPic"></div>
         </Col>
        </Row>
    </Container>
    </div>
    
    
  )
}


