import React, { Component } from 'react'

import ExhibitsCard from './ExhibitsCard'

class Exhibit extends Component {

    render() {
        // console.log(this.state.largeImgUrl)
        const exhibits = this.props.exhibits.map(exhibit => {
            
            // Ternary to establish is Description is available for render
            let description =
                exhibit.description !== "" || exhibit.description !== null ? exhibit.description : null

            // Ternary to establish if Images are available for render
            let imgUrl =
                exhibit.images[0] !== undefined ? exhibit.images[0].n.url : null

            // Ternary to establish if Medium is available for render
            let medium =
                exhibit.medium !== "" ? exhibit.medium : null
            
            // Ternary to establish if Text is available for render
            let text =
                exhibit.gallery_text === "" || exhibit.gallery_text === null ?
                    exhibit.label_text :
                        exhibit.gallery_text !== "" || exhibit.gallery_text !== null ? 
                            exhibit.gallery_text :
                        null

            // Ternary to establish if Title has text available for render
            let title =
                exhibit.title !== "" || exhibit.title !== null ?
                    exhibit.title :
                        exhibit.title_raw !== "" || exhibit.title_raw !== null ?
                            exhibit.title_raw :
                        null

            let largeImgUrl =
                exhibit.images[0] !== undefined ? exhibit.images[0].n.url : null

            return (
                <ExhibitsCard
                    description={description}
                    image={imgUrl}
                    key={exhibit.id}
                    largeImg={largeImgUrl}
                    medium={medium}
                    title={title}
                    text={text}
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

    // let titleVariable =
    // props.text[0] === '{'
    //     ?
    //         JSON.parse(props.text, (key, value) => {
    //             return key === 'title' ? titleVariable = value : null
    //         })
    //     : 
    //         null

    // let textVariable =
    // props.text[0] === '{'
    //     ?
    //         JSON.parse(props.text, (key, value) => {
    //             return key === 'description' ? textVariable = value : null
    //         })
    //     : 
    //         null
