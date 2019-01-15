import React, { Component } from 'react'

import ExhibitContainter from '../Exhibits/ExhibitContainer'

class ExhibitPresentation extends Component {

    render() {
        let exhibits = this.props.data.map(exhibit => {
            console.log(exhibit)
            return (
                <ExhibitContainter
                    key={exhibit.id}
                    title={exhibit.title}
                    start={exhibit.date_start}
                    end={exhibit.date_end}
                    text={exhibit.text}
                />
            )
        })

        return (
            <div>
                <h1>{exhibits}</h1>
            </div>
        )
    }
}

export default ExhibitPresentation
