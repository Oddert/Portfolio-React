import React from 'react'
import './style.scss'

function Contact () {
  return (
    <div className='contact'>
      <div className='contact__box'>
        <p className='contact__box--email'><i className='fa fa-envelope'></i> RobynFHVeitch@gmail.com</p>
        <p className='contact__box--phone'><i className='fa fa-phone'></i> (+44) 07767 297041</p>
        <p className='contact__box--location'><i className='fa fa-map-marker'></i> London</p>
      </div>
    </div>
  )
}

export default Contact
