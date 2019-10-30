import React from 'react'
import './style.scss'

import HeaderImage from './HeaderImage'

function Nav () {
  return (
    <div id="header">

      <div className="nav_bar">
        <nav className="nav_bar__icons">
          <p className="nav_bar__item home"><a href='#' className='smooth'>Home</a></p>
          <p className="nav_bar__item portfolio"><a href='#portfolio' className='smooth'>Portfolio</a></p>
          <p className="nav_bar__item about"><a href='#about' className='smooth'>About</a></p>
          <p className="nav_bar__item contact"><a href='#contact' className='smooth'>Contact</a></p>
        </nav>
      </div>

      <HeaderImage />

      <div className="nav_toggle"><i className="fa fa-angle-down fa-3x"></i></div>

      <nav className="nav_drop">
        <p><a href='#' className='smooth'>Home</a></p>
        <p><a href='#portfolio' className='smooth'>Portfolio</a></p>
        <p><a href='#about' className='smooth'>About</a></p>
        <p><a href='#contact' className='smooth'>Contact</a></p>
      </nav>

    </div>
  )
}

export default Nav
