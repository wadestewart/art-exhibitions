import React from 'react'

function ExhibitionsCard (props) {
    return (
        <div onClick={props.onDetailsClick}>
            <h2>{props.title}</h2>
        </div>
    )
}

export default ExhibitionsCard
