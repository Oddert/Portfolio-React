import React from 'react'
import './style.scss'

import Bio from './Bio'
import Header from './Header'
import Image from './Image'

function Profile () {
  return (
    <section id='profile'>
      <div className='profile--wrapper'>
        <div className='profile__title'>
          <Header />
          <Image />
        </div>
        <Bio />
      </div>
    </section>
  )
}

export default Profile
