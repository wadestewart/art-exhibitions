import React, { Component } from 'react'

import './Exhibits.css'

class ExhibitsCard extends Component {

    render() {
        let exhibit

        if (this.props.image !== null && this.props.description !== null) {
            exhibit = (
                <div>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src={this.props.image} alt="Piece of Artwork" />
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
            exhibit = (
                <div>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src={this.props.image} alt="Piece of Artwork" />
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
                {/* <ArtImage

                /> */}
                {exhibit}
            </div>
        )
    }
    
}

export default ExhibitsCard
