import React from 'react'

import './Exhibitions.css'

function ExhibitionsCard (props) {
    return (
        <div className="exhibition" onClick={props.onExhibitionClick}>
            <h5 className="current">{props.title}</h5>
        </div>
    )
}

export default ExhibitionsCard
