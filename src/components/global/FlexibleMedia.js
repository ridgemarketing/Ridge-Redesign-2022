import React, { useState } from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Player } from '@lottiefiles/react-lottie-player'
import { Play } from "../svg"

const FlexibleMedia = (props) => {
    
    const data  = props.data
    const type  = data.type
    let image   = false
    const lottie  = (type === `lottie`) ? data.lottie : false;
    const video   = (type === `video`) ? data.video : false;
    const videoType = (type === 'video') ? data.videoSource : null;
    const thumbnail = (type === 'video') ? getImage(video.thumbnailImage.localFile) : false;
    const ratio = props.paddingRatio ? props.paddingRatio : '56.25%';

    const [showVideo, setShowVideo] = useState(false)

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
                        autoplay={true} controls={false}
                        loop={true}
                        src={lottie}
                        style={{ height: 'auto', width: '100%' }}
                    />
                </div>
            }
            {video && videoType == 'file' &&
                <div>
                    <video preload="metadata" controls src={video.videoUrl} type="video/mp4" className={`w-full z-0`} />
                </div>
            }
            {video && videoType == 'vimeo' && 
                <div className={`pt-[${ratio}] w-full relative`}>
                    {video.thumbnailImage && !showVideo &&
                        <div className={`absolute top-0 left-0 w-full h-full object-cover z-30 flex flex-col items-center justify-center text-rm-white`}>
                            <GatsbyImage className={`absolute top-0 left-0 w-full h-full object-cover`} image={thumbnail} alt={``} loading={`eager`} />
                            <button onClick={() => setShowVideo(true)} className={`relative shadow-none transition-shadow hover:shadow-block`}><Play /></button>
                        </div>
                    }
                    <iframe className={`w-full h-full z-20 absolute object-cover left-0 top-0`} src={video.videoUrl} width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>            
            }
        </div>
    )
}

export default FlexibleMedia