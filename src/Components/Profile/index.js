import React from 'react'

import Bio from './Bio'
import Header from './Header'
import Image from './Image'

function Profile () {
  return (
    <section id='profile'>
      <div>
        <Header />
        <Image />
      </div>
      <Bio />
    </section>
  )
}

export default Profile
