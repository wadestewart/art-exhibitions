import React, { Component } from 'react'

import { API } from '../../config'
import './Exhibitions.css'

class ExhibitionsCard extends Component {

    state = {
        imgUrls: []
    }

    componentDidMount = () => {
        fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=${API.apiKey}&exhibition_id=${this.props.id}&has_images=true&page=1&per_page=1`)
            .then(res => res.json())
            .then(data => {
                let newImage = data.objects[0].images[0].sq.url
                this.setState ({
                    imgUrls: this.state.imgUrls.concat(newImage)
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.imgUrls)
        return (
            <div>
                <h5 className="current" onClick={this.props.onExhibitionClick}>{this.props.title}</h5>
            </div>
            // <div className="card horizontal">
            //     <div className="card-content">
            //         <h5 className="current" onClick={props.onExhibitionClick}>{props.title}</h5>
            //     </div>
            // </div>
        )
    }
}

export default ExhibitionsCard
