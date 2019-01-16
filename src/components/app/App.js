import React, { Component } from 'react'

import { API } from '../../config'
import Exhibitions from '../Exhibitions/Exhibitions'

class App extends Component {
  constructor() {
    super()

    this.handleDetailsClick = this.handleDetailsClick.bind(this)

    this.state = {
        current: {},
        images:[],
        exhibitions: []
    }
  }

  handleDetailsClick = (exhibit) => {
    fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=${API.apiKey}&exhibition_id=${exhibit.id}&page=1&per_page=100`)
      .then(res => res.json())
      .then(data => {
          console.log(data)
      })
      .catch(err => console.log(err))
  }


  componentDidMount = () => {
    fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getList&access_token=${API.apiKey}&page=1&per_page=100`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        this.setState({ exhibitions: data.exhibitions})
      })
      .catch(err => console.log(err))
  }

  render() {
    // console.log(this.state.exhibitions)
    let data = this.state.exhibitions
    let card =
      this.state.exhibitions.length !== 0 ?
      <Exhibitions
        data={data}
        onDetailsClick={this.handleDetailsClick}
      /> :
      null

    return (
      <div>
        {card}
      </div>
    )
  }
}

export default App;
