import React from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import { Player } from '@lottiefiles/react-lottie-player'

const FlexibleMedia = (props) => {
    
    const data  = props.data
    const type  = data.type
    let image   = false
    const lottie  = (type === `lottie`) ? data.lottie : false;
    const video   = (type === `video`) ? data.video : false;
    const videoType = (type === 'video') ? data.videoSource : null;

    if (type === `image`) {
        image = (data.image.localFile.ext === `.svg`) 
            ? <img className={props.className} src={data.image.sourceUrl} alt={data.image_alt} />

            : <GatsbyImage 
                image={data.image.localFile.childImageSharp.gatsbyImageData} 
                alt={data.image_alt}
                className={props.className} 
                objectFit={props.objectFit}/> 
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
                        autoPlay
                        loop
                        src={lottie}
                        style={{ height: 'auto', width: '100%' }}
                    >
                    </Player>
                </div>
            }
            {video && videoType == 'file' &&
                <div>
                    <video preload="metadata" controls src={video.videoUrl} type="video/mp4" className={`w-full z-0`} />
                </div>
            }
            {video && videoType == 'vimeo' && 
                <div className={'pt-[56.25%] w-full relative'}>
                    <iframe className={`w-full h-full z-40 absolute object-cover left-0 top-0`} src={video.videoUrl} width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>            
            }
        </div>
    )
}

export default FlexibleMedia