import { Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import {useEffect} from 'react'
import killarny from '../../img/pics/killarny.png'
import purmamarca from '../../img/pics/purmamarca.jpg'
import tafi from '../../img/pics/tafi.jpg'

export const Carousell = () => {
  
return(
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 firstSlide"
      src={killarny}
      alt="Meditation Course"
    />
    <Carousel.Caption>
      <h3>Meditation Course</h3>
      <p>Enter the meditation world, start to train your attention</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={purmamarca}
      alt="purmamarca"
    />

    <Carousel.Caption>
      <h3>Yoga for Lumbar Pain</h3>
      <p>Relax your back with this soft flow class</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={tafi}
      alt="tafi"
    />

    <Carousel.Caption>
      <h3>Essential Yoga</h3>
      <p>First steps on the Yoga path</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

)
}