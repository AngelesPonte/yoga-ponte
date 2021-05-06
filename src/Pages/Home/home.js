import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {SignUp} from '../../Components/SignUp/signUp'

export const Home = () => {
  return(
      <article>
        <div className="background"></div>  
        <h1 className="home">Tap your most highest potential, cultivate your practice and become the best version of yourself </h1>
        <Container className="center">
          <button className="freeTrial" > Start Free Trial</button>
        </Container>
        <Container className="mainDescription">
        <p>Join Us! Over 100 videos including yoga and meditation for all levels. Access the full library, new videos every week! Meditation courses & records to keep a daily practice.</p>
        <p>Personalized your journey: Close contact with your teacher in a schedule open communication. Find design templates & journals to complete and track objectives in all aspects of your life</p>
        <p>Connect with a one of a kind global community. Find spiritual friends & meditations partners, what Buddhist call SANGHA, one of the tree jewels of your path.</p>
        </Container>
        <SignUp/>
      </article>
        )
}