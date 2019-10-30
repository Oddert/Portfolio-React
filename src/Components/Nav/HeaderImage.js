import React from 'react'

class HeaderImage extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      height: null
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll () {
    const { scrollY, innerHeight } = window
    let diff = innerHeight - scrollY
      , height
    if (diff <= 50) height = 50
    else if (diff > 50 && diff <= innerHeight) height = diff
    else height = innerHeight
    this.setState (state => {
      if (height === 50) return { height, side: true }
      else return { height, side: false }
    })
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render () {
    const { height, side } = this.state
    const styleA = {
      height,
      // justifyContent: side ? 'flex-start' : 'center'
    }
    const styleImg = side ? {
      position: 'absolute',
      transform: `translateX(0%) rotate(45deg)`,
      height: 'auto',
      width: '50px'
    } : {
      position: 'absolute',
      left: '50%',
      transform: `translateX(-50%)`
    }
    const src = side ? "/img/logo_no_text.png" : "/img/logo_five.png"
    return (
      <div className="header__cover_image" style={styleA}>
        <a href='#'>
          <img src={src} style={styleImg} alt="logo" />
        </a>
      </div>
    )
  }
}

export default HeaderImage
