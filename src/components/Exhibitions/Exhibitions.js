import React, { Component } from 'react'

import ExhibitionCard from './ExhibitionCard'

class Exhibitions extends Component {

  render() {

    const exhibitions = this.props.exhibitions.map(exhibition => {
      return (
        <ExhibitionCard
          key={exhibition.id}
          id={exhibition.id}
          title={exhibition.title}
          text={exhibition.text}
          start={exhibition.date_start}
          end={exhibition.date_end}
          onDetailsClick={() => this.props.onDetailsClick(exhibition)}
        />
      )
    })

    return (
        <div>
            {exhibitions}
        </div>
    )
  }
}

export default Exhibitions
