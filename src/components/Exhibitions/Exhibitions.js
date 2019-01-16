import React, { Component } from 'react'

import ExhibitionCard from './ExhibitionCard'

class Exhibitions extends Component {

  render() {
    let exhibits = this.props.exhibitions.map(exhibit => {
      // console.log(exhibit)
      return (
        <ExhibitionCard
          key={exhibit.id}
          id={exhibit.id}
          title={exhibit.title}
          text={exhibit.text}
          start={exhibit.date_start}
          end={exhibit.date_end}
          onDetailsClick={() => this.props.onDetailsClick(exhibit)}
        />
      )
    })

    return (
        <div>
            {exhibits}
        </div>
    )
  }
}

export default Exhibitions
