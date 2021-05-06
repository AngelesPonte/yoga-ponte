import { Form } from 'react-bootstrap';
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
    <Container>
        <Row className="backgroundSignUp" >
            <Col>
            <Form className="mainDescription">
                <h3 className="center">Try it for 3 days</h3>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Example select</Form.Label>
                    <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Example multiple select</Form.Label>
                    <Form.Control as="select" multiple>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
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


