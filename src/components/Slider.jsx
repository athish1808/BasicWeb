import React from 'react'
import Navbar from '../components/Navbar';


import { useNavigate } from 'react-router-dom'

function Slider() {
  const navigate=useNavigate()
  return (
    <div>

      <Navbar/>
        <br/>
        <br/>
        <br/>
        <br/>
        <center>
        <h1 style={{ color:'red', fontWeight: 'bold'}}>TECH MASTERS</h1>
        <h3>Tech master provide various courses</h3>

        <img src='https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        </center>


     
    </div>
  )
}

export default Slider