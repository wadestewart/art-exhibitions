import React, { Component } from 'react'

import ExhibitionCard from './ExhibitionCard'
import './Exhibitions.css'

class Exhibitions extends Component {

  render() {
    const exhibitions = this.props.exhibitions.map(exhibition => {
      return (
          <ExhibitionCard
            key={exhibition.id}
            id={exhibition.id}
            title={exhibition.title}
            text={exhibition.text}
            onExhibitionClick={() => this.props.onExhibitionClick(exhibition)}
          />
      )
    })

    return (
      <div className="exhibitions">
        <div className="row">
          {exhibitions}
        </div>
      </div>
    )
  }
}

export default Exhibitions
