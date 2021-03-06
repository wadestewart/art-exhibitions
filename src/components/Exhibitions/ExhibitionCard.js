// Import dependencies
import React, { Component } from 'react'

// Import API key from config file
import { API } from '../../config'

// Import components
import SquareImage from '../squareImage/SquareImage'
import './Exhibitions.css'

class ExhibitionsCard extends Component {
    // These variables are to handle unmounting a component when the user clicks away from exhibits [1]
    controller = new AbortController()
    // signal = this.controller.signal

    state = {
        isLoading:  false,
        imgUrls:    []
    }

    componentDidMount = () => {
        this.fetchSingleExhibition()
    }

    // This handles aborting the fetch call if a user navigates away before finished [1]
    componentWillUnmount = () => {
        this.controller.abort()
    }

    // Fetching data for individual exhibition
    fetchSingleExhibition = () => {
        // const controller = new AbortController()
        const signal = this.controller.signal
        this.setState({ isLoading: true})
        fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=${API.apiKey}&exhibition_id=${this.props.id}&has_images=true`, { signal })
        .then(res => res.json())
        .then(data => {
            let newImage = data.objects[0].images[0].sq.url
            this.setState ({
                isLoading: true,
                imgUrls: this.state.imgUrls.concat(newImage)
            })
        })
        .catch(err => console.log(err.message))
    }

    render() {
        console.log(this.state.isLoading)
        let exhibitionCard =
            this.state.imgUrls !== []
            ?   <div className="col m3">
                    <div className="card hoverable" onClick={this.props.onExhibitionClick}>
                        <div className="card-image" onClick={this.props.onExhibitionClick}>
                            <SquareImage
                                image={this.state.imgUrls}
                            />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content grey lighten-3">
                                <h6 className="black-text flow-text center-align">{this.props.title}</h6>
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

// notes on sources:
// 1: https://developer.mozilla.org/en-US/docs/Web/API/AbortController
// https://medium.freecodecamp.org/how-to-work-with-react-the-right-way-to-avoid-some-common-pitfalls-fc9eb5e34d9e


