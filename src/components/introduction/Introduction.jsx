import React from 'react'
import IntroductionImage from '../images/Main-picture.png'
import './Introduction.css'

const Introduction = () => {
  return (
    <div className='container'>
        <img src={IntroductionImage} alt="" />
        <p className="top-left"><span>The All-in-One</span>
        <span>restaurant</span> 
        <span>POS Management System</span> <span>and hardware.</span></p>
    </div>
  )
}

export default Introduction