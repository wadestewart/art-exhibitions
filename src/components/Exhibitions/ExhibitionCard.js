import React from 'react'

import './Exhibitions.css'

function ExhibitionsCard (props) {
    return (
        <div className="exhibition">
            <h5 className="current" onClick={props.onExhibitionClick}>{props.title}</h5>
        </div>
    )
}

export default ExhibitionsCard
