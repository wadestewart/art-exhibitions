import React, { Component } from 'react'

import { API } from '../../config'
import ExhibitPresentation from '../Exhibitions/ExhibitionsPresentation'

class ExhibitionContainer extends Component {
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
        .catch(err => console.log(err))
    }

    render() {
        let data = this.state.exhibitions;
        let card =
          this.state.exhibitions.length !== 0 ?
          <ExhibitPresentation
            data={data}
          /> :
          null;
    
        return (
          <div>
            {card}
          </div>
        );
    }
}

export default ExhibitionContainer
