import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fb from '../../../src/img/Icons/fb.png';
import ig from '../../../src/img/Icons/ig.png';
import yt from '../../../src/img/Icons/yt.png';
import sp from '../../../src/img/Icons/sp.png';
import { Link } from 'react-router-dom';


export const Footer = () => {
    return(
        <Container>
        <footer>
            <h4 className="home">Social Media</h4>
            <Row className="li">
            <li className="iconFooter"><img src={ig} width="30rem" alt="instagram"/></li>
            <li className="iconFooter"><img src={fb} width="30rem" alt="facebook"/></li>
            <li className="iconFooter"><img src={yt} width="30rem" alt="YouTube"/></li>
            <li className="iconFooter"><img src={sp} width="30rem" alt="spotify"/></li>
            </Row>
        </footer>
                <Container className="mainDescription">
                     <p> © 2021 Live Yogi Studio. All Rights Reserved.</p>
                </Container>
          </Container> 

    )}
    