import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Navbar,Container,Nav  } from 'react-bootstrap'
function Navbars(){ 

 
  //react-router-dom-->navigate

  const navigate=useNavigate()
  
  return(
   <> 
    {/* NAVBAR from BOOTSTRAP */}
   
<Navbar fixed='top' style={{backgroundColor:'grey',height:'90px'}} variant='light' expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">TECHMASTER</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link  onClick={()=>navigate('/')}>Home</Nav.Link>
          <Nav.Link  onClick={()=>navigate('/About')}>About</Nav.Link>
          <Nav.Link  onClick={()=>navigate('/Branches')}>Branch</Nav.Link>
        <Nav.Link  onClick={()=>navigate('/contact')}>Contact</Nav.Link>
      </Nav>
     
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
)}
export default Navbars