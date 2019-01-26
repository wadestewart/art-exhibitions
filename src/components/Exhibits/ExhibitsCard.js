import React from 'react'

import './Exhibits.css'

function ExhibitsCard(props) {
    // console.log(props)
    
    if (props.image !== null && props.description !== null) {
        return (
            <div>
                <figure className="exhibit-card">
                    <img src={props.image} alt="Piece of Artwork" />
                    <div className="exhibit-text">
                        <h4 className="exhibit-title">Title:</h4>
                        <h3 className="exhibit-title-text">{props.title}</h3>
                        <h4 className="info">Information:</h4>
                        <h4 className="info-text">{props.description}</h4>
                        <h4 className="medium">Medium:</h4>
                        <h4 className="medium-text">{props.medium}</h4>
                    </div>
                </figure>
            </div>
        )
    } else if (props.image !== null && props.text !== null) {
        return (
            <div>
                <figure className="exhibit-card">
                    <img src={props.image} alt="Piece of Artwork" />
                    <div className="exhibit-text">
                        <h4 className="exhibit-title">Title:</h4>
                        <h2 className="exhibit-title-text">{props.title}</h2>
                        <h4 className="info">Information:</h4>
                        <h4 className="info-text">{props.text}</h4>
                        <h4 className="medium">Medium:</h4>
                        <h3 className="medium-text">{props.medium}</h3>
                    </div>
                </figure>
            </div>
        )
    } else {
        return null
    }
}

export default ExhibitsCard
