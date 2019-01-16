import React, { Component } from 'react'

class ExhibitionsCard extends Component {

    render() {
        // console.log(this.props)

        return (
            <div onClick={this.props.onDetailsClick}>
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}

export default ExhibitionsCard
