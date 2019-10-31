import React from 'react'

import CallToAction from './CallToAction'
import CV from './CV'

function Bio () {
  return (
    <div className='profile__bio'>
      <div className='profile__bio--text'>
        <p>I’m also a developer, artist, researcher, cyclist, activist, advocate and Glaswegian-turned-Londoner.</p>

        <p>Student BA Product Design (DPS) at Central Saint Martins, UAL.</p>

        <p>I specialise in the application of social and user-centred design. I believe that research and listening to real people is imperative to creating meaningful solutions and adding genuine value to improve peoples’ lives. This is, to me ‘Problem Solving’, and problem solving, is the essence of design.</p>

        <p>I have a wide skillset and focus on iterative development and the appropriate application of technology. I’m a self-taught developer with the amazing non-profit, <a href='https://www.freecodecamp.org/oddert'>freeCodeCamp</a>.</p>

        <CV />

        <CallToAction />
      </div>
    </div>
  )
}

export default Bio
