import React, { Component } from 'react'

import SmallImage from '../smallImage/SmallImage'
import Player from '../player/Player'
import './Artworks.css'

class ArtworkCard extends Component {

    render() {
        let artwork

        if (this.props.image !== null && this.props.description !== null && this.props.description.startsWith("https") === true) {
            artwork = (
                <div className="col m4">
                    <div className="card">
                        <div id="artwork-img" className="card-image">
                            <SmallImage
                                image={this.props.image}
                            />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <h6>Title:</h6>
                                <h5>{this.props.title}</h5>
                                <h6>Information:</h6>
                                <Player
                                    description={this.props.description}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.image !== null && this.props.description !== null) {
            artwork = (
                <div className="col m4">
                    <div className="card">
                        <div id="artwork-img" className="card-image">
                            <SmallImage
                                image={this.props.image}
                            />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <h6>Title:</h6>
                                <h5>{this.props.title}</h5>
                                <h6>Information:</h6>
                                <p>{this.props.description}</p>
                                <h6>Medium:</h6>
                                <h6 className="medium">{this.props.medium}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.image !== null && this.props.text !== null) {
            artwork = (
                <div className="col m4">
                    <div className="card">
                        <div id="artwork-img" className="card-image">
                            <SmallImage
                                image={this.props.image}
                            />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <h6>Title:</h6>
                                <h5>{this.props.title}</h5>
                                <h6>Information:</h6>
                                <p>{this.props.text}</p>
                                <h6>Medium:</h6>
                                <h6 className="medium">{this.props.medium}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }

        return (
            <div>
                {artwork}
            </div>
        )
    }
    
}

export default ArtworkCard
