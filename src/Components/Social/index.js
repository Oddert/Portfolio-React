import React from 'react'
import './style.scss'

class Social extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      links: [
        {
          classIcon: 'fab fa-linkedin fa-lg',
          href: 'https://www.linkedin.com/in/robyn-veitch-582aa3b6/',
          label: 'LinkedIn profile',
          fill: '#0077B5',
          classBrand: 'linkedin'
        },
        {
          classIcon: 'fab fa-github fa-lg',
          href: 'https://github.com/Oddert/',
          label: 'Github profile',
          fill: '#FFFFFF',
          classBrand: 'github'
        },
        {
          classIcon: 'fab fa-free-code-camp fa-lg',
          href: 'https://www.freecodecamp.org/certification/oddert/full-stack',
          label: 'freeCodeCamp page with certifications',
          fill: '#0077B5',
          classBrand: 'freecodecamp'
        }
      ],
      focused: null,
      uri: ' '
    }
    this.focusCard = this.focusCard.bind(this)
    this.deFocus = this.deFocus.bind(this)
  }

  focusCard (focused, uri) {
    this.setState ({ focused, uri })
  }

  deFocus () {
    this.setState ({ focused: null, uri: ' ' })
  }

  createCards () {
    const { links, focused, uri } = this.state
    const out = links.map((each, idx) => {
      const selected = focused === idx ? ' focused' : ''
      return (
        <a
          href={ each.href }
          className={ 'social__cards--card ' + each.classBrand + selected }
          key={ each.classBrand }
          onMouseOver={ () => this.focusCard(idx, each.href) }
          >
          <i className={ each.classIcon }></i>
        </a>
      )
    })
    return out
  }

  render () {
    const { uri } = this.state
    return (
      <div className='social'>
        <div
          className='social__cards'
          onMouseOut={ this.deFocus }
        >
          { this.createCards() }
        </div>
        <div className='social__uri'>
          <p>{ uri }</p>
        </div>
      </div>
    )
  }
}

export default Social
