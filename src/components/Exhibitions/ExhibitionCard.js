import React from 'react'

import './Exhibitions.css'

function ExhibitionsCard (props) {
    return (
        <div className="exhibition" onClick={props.onExhibitionClick}>
            <h3 className="current">{props.title}</h3>
        </div>
    )
}

export default ExhibitionsCard
