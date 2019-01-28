import React, { Component } from 'react'

import { API } from '../../config'

import SquareImage from '../SquareImage/SquareImage'
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
        let exhibitionCard =
            this.state.imgUrls !== []
            ?   <div className="row">
                    <div className="col s10 push-s1">
                        <div className="card small horizontal hoverable" onClick={this.props.onExhibitionClick}>
                            <div className="card-image" onClick={this.props.onExhibitionClick}>
                                <SquareImage
                                    image={this.state.imgUrls}
                                />
                            </div>
                            <div className="card-stacked">
                                <div className="card-content grey lighten-3">
                                    <h5 className="black-text">{this.props.title}</h5>
                                    <p className="black-text">{this.props.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            : null

        return (
            <div>
                {exhibitionCard}
            </div>
        )
    }
}

export default ExhibitionsCard
