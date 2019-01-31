import React, { Component } from 'react'

import ArtworkCard from './ArtworkCard'

class Artworks extends Component {

    render() {
        // console.log(this.state.largeImgUrl)
        const artworks = this.props.exhibits.map(artwork => {
            // console.log(exhibit)
            
            // Ternary to establish is Description is available for render
            let description =
                artwork.description !== "" || artwork.description !== null ? artwork.description : null

            // Ternary to establish if Images are available for render
            let imgUrl =
                artwork.images[0] !== undefined ? artwork.images[0].n.url : null

            // Ternary to establish if Medium is available for render
            let medium =
                artwork.medium !== "" ? artwork.medium : null
            
            // Ternary to establish if Text is available for render
            let text =
                artwork.gallery_text === "" || artwork.gallery_text === null ?
                    artwork.label_text :
                        artwork.gallery_text !== "" || artwork.gallery_text !== null ? 
                            artwork.gallery_text :
                        null

            // Ternary to establish if Title has text available for render
            let title =
                artwork.title !== "" || artwork.title !== null ?
                    artwork.title :
                        artwork.title_raw !== "" || artwork.title_raw !== null ?
                            artwork.title_raw :
                        null

            let largeImgUrl =
                artwork.images[0] !== undefined ? artwork.images[0].n.url : null

            return (
                <ArtworkCard
                    description={description}
                    image={imgUrl}
                    key={artwork.id}
                    largeImg={largeImgUrl}
                    medium={medium}
                    title={title}
                    text={text}
                />
            )
        })

        return (
            <div className="exhibits">
                <div className="row">
                    {artworks}
                </div>  
            </div>
        )
    }
}

export default Artworks

