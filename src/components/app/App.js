import React, { Component } from 'react'

import { API } from '../../config'
import Exhibitions from '../Exhibitions/Exhibitions'
import Exhibits from '../Exhibits/Exhibits';

class App extends Component {
  constructor() {
    super()

    this.handleDetailsClick = this.handleDetailsClick.bind(this)

    this.state = {
        exhibits:     [],
        exhibitions:  []
    }
  }

  handleDetailsClick = (exhibition) => {
    fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=${API.apiKey}&exhibition_id=${exhibition.id}&page=1&per_page=100`)
      .then(res => res.json())
      .then(data => {
        this.setState({ exhibits: data.objects })
      })
      .catch(err => console.log(err))
  }

  componentDidMount = () => {
    fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getList&access_token=${API.apiKey}&page=1&per_page=100`)
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
      this.state.exhibits.length === 0 ?
        this.state.exhibitions.length !== 0 ?
          <Exhibitions
            exhibitions={exhibitions}
            onDetailsClick={this.handleDetailsClick}
          />
        :
          null
      :
        <Exhibits
          exhibits={exhibits}
        />

    return (
      <div>
        {conditionalRender}
      </div>
    )
  }
}

export default App;
