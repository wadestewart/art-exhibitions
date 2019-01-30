import React, { Component } from 'react'

import { API } from '../../config'

import SquareImage from '../SquareImage/SquareImage'
import './Exhibitions.css'

class ExhibitionsCard extends Component {
    constructor() {
        super()

        this.state = {
            imgUrls: []
        }
    }


    componentDidMount = () => {
        fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=${API.apiKey}&exhibition_id=${this.props.id}&has_images=true&page=1&per_page=100`)
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
        let exhibitionCard =
            this.state.imgUrls !== []
            ?   <div className="row">
                    <div className="col m3">
                        <div className="card hoverable" onClick={this.props.onExhibitionClick}>
                            <div className="card-image" onClick={this.props.onExhibitionClick}>
                                <SquareImage
                                    image={this.state.imgUrls}
                                />
                            </div>
                            <div className="card-stacked">
                                <div className="card-content grey lighten-3">
                                    <h5 className="black-text flow-text center-align">{this.props.title}</h5>
                                    {/* <p className="black-text">{this.props.text}</p> */}
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
