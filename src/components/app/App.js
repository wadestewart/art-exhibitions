import React, { Component } from 'react'

import { API } from '../../config'
import Header from '../Header/Header'
import Exhibitions from '../Exhibitions/Exhibitions'
import Exhibits from '../Exhibits/Exhibits'

class App extends Component {
  constructor() {
    super()

    this.handleReload = this.handleReload.bind(this)
    this.handleExhibitionClick = this.handleExhibitionClick.bind(this)

    this.state = {
        exhibits:       [],
        exhibitions:    []
    }
  }

  handleReload = () => {
    this.setState({ exhibits: [] })
  }

  handleExhibitionClick = (exhibition) => {
    fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=${API.apiKey}&exhibition_id=${exhibition.id}&page=1&per_page=100`)
      .then(res => res.json())
      .then(data => {
        this.setState({ exhibits: data.objects })
      })
      .catch(err => console.log(err))
  }

  componentDidMount = () => {
    fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getList&access_token=${API.apiKey}&page=1&per_page=5`)
      .then(res => res.json())
      .then(data => {
        this.setState({ exhibitions: data.exhibitions })
      })
      .catch(err => console.log(err))
  }

  render() {
    const exhibits = this.state.exhibits
    const exhibitions = this.state.exhibitions
    const conditionalRender = 
      this.state.exhibits.length === 0 
      ? this.state.exhibitions.length !== 0
        ? <Exhibitions
            exhibitions={exhibitions}
            onExhibitionClick={this.handleExhibitionClick}
          />
        : null
      : <Exhibits
          exhibits={exhibits}
        />

    return (
      <div>
        <Header
          onReload={this.handleReload}
        />
        {conditionalRender}
      </div>
    )
  }
}

export default App;
