import React from "react"
import { theme } from '../../static/theme'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Player } from '@lottiefiles/react-lottie-player'

const FlexibleMedia = (props) => {
    
    const data  = props.data
    const type  = data.type

    let image   = false
    let lottie  = false
    let video   = false

    if (type === `image`) {
        image = (data.image.localFile.ext === `.svg`) 
            ? <img className={props.className} src={data.image.sourceUrl} alt={data.image_alt} />

            : <GatsbyImage 
                image={data.image.localFile.childImageSharp.gatsbyImageData} 
                alt={data.image_alt}
                className={props.className} 
                objectFit={props.objectFit}/> 
    }

    if (type === `lottie`) {
        lottie = data.lottie
    }

    if (type === `video`) {
        video = data.video
    }

    return (
        <div className={props.wrapperClassName}>
            {image &&
                <div>
                    {image}
                </div>
            }
            {lottie &&
                <div>
                    <Player
                        autoplay
                        loop
                        src={lottie}
                        style={{ height: 'auto', width: '100%' }}
                    >
                    </Player>
                </div>
            }
            {video &&
                <div dangerouslySetInnerHTML={{__html: video}}></div>
            }
        </div>
    )
}

export default FlexibleMedia