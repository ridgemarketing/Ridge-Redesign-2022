import React, { useState } from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Play } from "../svg"
import Vimeo from "@u-wave/react-vimeo"

const FlexibleMedia = (props) => {
    
    const data  = props.data
    const type  = data.type
    let image   = false
    const lottie  = (type === `lottie`) ? data.lottie : false;
    const video   = (type === `video`) ? data.video : false;
    const videoType = (type === 'video') ? data.videoSource : null;
    const thumbnail = (type === 'video') ? getImage(video.thumbnailImage.localFile) : false;
    const ratio = props.paddingRatio ? props.paddingRatio : '56.25%';

    const playVideo = () => {
        setPauseVideo(false)
        setShowVideo(true)
    }

    const [pauseVideo, setPauseVideo] = useState(true)
    const [showVideo, setShowVideo] = useState(false)

    if (type === `image`) {
        image = (data.image.localFile.ext === `.svg`) 
            ? <img className={props.className} src={data.image.sourceUrl} alt={data.image_alt} />

            : <GatsbyImage 
                image={data.image.localFile.childImageSharp.gatsbyImageData} 
                alt={data.image_alt ? data.image_alt : ``}
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
                    <DotLottieReact
                        autoplay={true} controls={false}
                        loop={true}
                        src={lottie}
                        style={{ height: 'auto', width: '100%' }}
                    />
                </div>
            }
            {video && videoType === 'file' &&
                <div>
                    <video preload="metadata" controls src={video.videoUrl} type="video/mp4" className={`w-full z-0`} />
                </div>
            }
            {video && videoType === 'vimeo' && 
                <div className={`pt-[${ratio}] w-full relative media-video`}>
                    {video.thumbnailImage && !showVideo &&
                        <div className={`absolute top-0 left-0 w-full h-full object-cover z-30 flex flex-col items-center justify-center`}>
                            <GatsbyImage className={`absolute top-0 left-0 w-full h-full object-cover`} image={thumbnail} alt={``} loading={`eager`} />
                        </div>
                    }
                        <Vimeo
                            video={video.videoUrl}
                            paused={pauseVideo}
                            responsive
                            className={`absolute top-0 left-0 w-full h-full object-cover`}
                            onPause={() => setPauseVideo(true)}
                        />
                        {pauseVideo &&
                            <div className={`absolute top-0 left-0 w-full h-full object-cover z-30 flex flex-col items-center justify-center text-rm-white`}>
                                <button onClick={() => playVideo()} className={`relative rounded-full shadow-none transition-shadow hover:shadow-block`}><Play /></button>
                            </div>
                        }
                </div>            
            }
        </div>
    )
}

export default FlexibleMedia
