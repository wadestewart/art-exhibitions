import React from 'react'

import './Exhibitions.css'

function ExhibitionsCard (props) {
    return (
        <div>
            <h5 className="current" onClick={props.onExhibitionClick}>{props.title}</h5>
        </div>
        // <div className="card horizontal">
        //     <div className="card-content">
        //         <h5 className="current" onClick={props.onExhibitionClick}>{props.title}</h5>
        //     </div>
        // </div>
    )
}

export default ExhibitionsCard
