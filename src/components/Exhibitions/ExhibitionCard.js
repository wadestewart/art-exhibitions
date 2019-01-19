import React from 'react'

import './Exhibitions.css'

function ExhibitionsCard (props) {
    return (
        <div className="exhibition" onClick={props.onDetailsClick}>
            <h2>{props.title}</h2>
        </div>
    )
}

export default ExhibitionsCard
