import React, { Component } from 'react';
import { API } from '../../config'

class App extends Component {
  constructor() {
    super()

    this.state = {
      exhibitions: []
    }
  }

  componentDidMount = () => {
    fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getList&access_token=${API.apiKey}&page=1&per_page=100`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        this.setState({ exhibitions: data.exhibitions})
      })
  }

  render() {
    console.log(this.state.exhibitions)
    return (
      <div>
        <h1>Hello Suckas!</h1>
      </div>
    );
  }
}

export default App;
