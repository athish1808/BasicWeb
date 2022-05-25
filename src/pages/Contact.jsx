import React from 'react'
import {Carousel} from 'react-bootstrap'
import '../styles/contact.css'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Contact() {
  const navigate=useNavigate()
  return (
    <div>
      <Navbar/>
      <br/>
      <br/>
      <h1 style={{paddingTop:'60px',backgroundColor:'rgba(0, 0, 0, 0.8)'}}>Our Branches</h1>
      <section>
      <Carousel fade >
  
 
  <Carousel.Item>
  <img
      className="d-block w-100"
      style={{backgroundColor:'black'}}
      src='https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' height='1500px' alt='contactimg' 
      />

    <Carousel.Caption>
      <h1>chennai</h1>
      <p> 456,ABC road, chennai-99</p>

    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{backgroundColor:'black'}}
      src='https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' height='1500px' alt='contactimg' 
      />

    <Carousel.Caption>
      <h1>newyork</h1>
      <p>256,willington road,newyork</p>
    </Carousel.Caption>

  </Carousel.Item>
</Carousel>
      </section>
      
    </div>
  )
}

export default Contact