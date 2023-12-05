import React from 'react'
import './Succes.css'
import imgdata from './../Navbar/icon-success.svg'
import { Link } from 'react-router-dom'
const Success = () => {
  return (
    <div className='mainsuc'>
         <div className='card'>
          <div className='cardmain'>
          <img className='cardimg' src={imgdata} alt='wq'/>

<h4>Thanks for subscribing!</h4>
<p className='paras'>A confirmation email has been sent to emai . please open it  and click the button inside to confirm Your subscription</p>
<Link to='/'>
<button className='dismiss' type='submit'>Dismiss message</button>
</Link>

          </div>
           
         </div>
    </div>
  )
}

export default Success