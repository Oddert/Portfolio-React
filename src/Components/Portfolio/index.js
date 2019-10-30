import React from 'react'
import * as items from '../../folio_items.js'
import './style.scss'


class Portfolio extends React.Component {

  generateFolioItems () {
    const out = []
    items.forEach((item, idx) => {
      out.push (
        <a
          href={ item.offsite ? item.url : 'https://oddert.github.io' + item.url }
          style={{ backgroundImage: `url(${item.thumbnail})` }}
          key={`folio_item_${idx}`}
        >
          <div className="project">
            <div className="cover"></div>
            <h3 className="project__title" dangerouslySetInnerHTML={{ __html: item.title }}></h3>
            <p className="project__description">{ item.description }</p>
          </div>
        </a>
      )
    })
    return out
  }

  render () {
    return (
      <section id="portfolio">
        <div className="title">
          <h2>Portfolio</h2>
        </div>
        <div className="folio">
          <div className="folio__items">
            { this.generateFolioItems () }
          </div>
        </div>
      </section>
    )
  }
}

export default Portfolio
