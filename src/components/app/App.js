import React, { Component } from 'react'

import { API } from '../../config'
import Exhibitions from '../Exhibitions/Exhibitions'
import Exhibits from '../Exhibits/Exhibits';

class App extends Component {
  constructor() {
    super()

    this.handleDetailsClick = this.handleDetailsClick.bind(this)

    this.state = {
        current:      {},
        images:       [],
        exhibits:     [],
        exhibitions:  []
    }
  }

  handleDetailsClick = (exhibit) => {
    fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=${API.apiKey}&exhibition_id=${exhibit.id}&page=1&per_page=100`)
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
        this.setState({ exhibitions: data.exhibitions})
      })
      .catch(err => console.log(err))
  }

  render() {
    let exhibits = this.state.exhibits
    let exhibitions = this.state.exhibitions
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
          exhibit={exhibits}
        />
    // let card =
    //   this.state.exhibitions.length !== 0 ?
    //     <Exhibitions
    //       exhibitions={exhibitions}
    //       exhibit={exhibit}
    //       onDetailsClick={this.handleDetailsClick}
    //     />
    //   :
    //     null

    return (
      <div>
        {conditionalRender}
      </div>
    )
  }
}

export default App;
