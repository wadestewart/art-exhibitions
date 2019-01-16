import React, { Component } from 'react'

import ExhibitsCard from './ExhibitsCard'

class Exhibit extends Component {

    render() {
        // console.log(this.props)
        const exhibits = this.props.exhibits.map(exhibit => {
            // console.log(exhibit.images[0].z.url)
            const imgUrl = exhibit.images[0].z.url
            return (
                <ExhibitsCard
                    key={exhibit.id}
                    title={exhibit.title}
                    image={imgUrl}
                />
            )
        })

        return (
            <div>
                {exhibits}
            </div>  
        )
    }
}

export default Exhibit
