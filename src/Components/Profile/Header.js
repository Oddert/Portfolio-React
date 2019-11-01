import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'

const fullText = "Hello. My name is Robyn and I'm a problem solver. "

class Header extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      text: '',
      animationStarted: false
    }
    // this.updateText = this.updateText.bind(this)
    this.animate = this.animate.bind(this)
    this.handleVisibility = this.handleVisibility.bind(this)
  }

  updateText (length) {
    this.setState (state => ({
      text: fullText.substring(0, length)
    }))
  }

  animate () {
    let tracker = 0
    let timer
    const interval = () => {
      if (Math.floor(Math.random() * 100) > 70) {
        this.updateText (tracker)
        tracker ++
      }
      if (tracker >= fullText.length) {
        clearInterval (timer)
      }
    }
    timer = setInterval (interval, 60)
  }

  handleVisibility (isVisible) {
    const { animationStarted } = this.state
    if (isVisible && !animationStarted) {
      this.setState ({
        animationStarted: true
      })
      this.animate ()
    }
  }

  render () {
    const { text } = this.state
    return (
      <VisibilitySensor
        onChange={ this.handleVisibility }
      >
        <div className='profile__title--header' onClick={ this.animate }>
          <h2>{ text }<span className='blink'>|</span></h2>
        </div>
      </VisibilitySensor>
    )
  }
}

export default Header
