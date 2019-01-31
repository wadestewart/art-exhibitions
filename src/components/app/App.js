import React, { Component } from 'react'

import { API } from '../../config'
import Header from '../header/Header'
import Exhibitions from '../exhibitions/Exhibitions'
import Artworks from '../artworks/Artworks'

class App extends Component {
  constructor() {
    super()

    this.handleReload = this.handleReload.bind(this)
    this.handleExhibitionClick = this.handleExhibitionClick.bind(this)

    this.state = {
        artworks:       [],
        exhibitions:    []
    }
  }

  componentDidMount = () => {
    this.fetchExhibitionsData()
  }

  fetchExhibitionsData = () => {
    fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getList&access_token=${API.apiKey}&page=1&per_page=10`)
      .then(res => res.json())
      .then(data => {
        this.setState({ exhibitions: data.exhibitions })
      })
      .catch(err => console.log(err))
  }
  
  handleExhibitionClick = (exhibition) => {
    fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=${API.apiKey}&exhibition_id=${exhibition.id}&page=1&per_page=20`)
      .then(res => res.json())
      .then(data => {
        this.setState({ artworks: data.objects })
      })
      .catch(err => console.log(err))
  }
  
  handleReload = () => {
    this.setState({ artworks: [] })
  }

  render() {
    console.log(this.state.artworks)
    const artworks = this.state.artworks
    const exhibitions = this.state.exhibitions
    const conditionalRender = 
      this.state.artworks.length === 0 
      ? this.state.exhibitions.length !== 0
        ? <Exhibitions
            exhibitions={exhibitions}
            onExhibitionClick={this.handleExhibitionClick}
          />
        : null
      : <Artworks
          artworks={artworks}
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
