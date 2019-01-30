import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class  Player extends Component {
    render() {
        return (
            <ReactPlayer
                url={this.props.description}
                height={135}
                width={290}
            />
        )
    }
}

export default Player
