import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide"
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll"
import { Container } from "../../../components/global/Wrappers"
import Parser from "../../../components/global/Parser"
import { DarkBlueCloud_Large, LightBlueCloud_Large } from "../../../static/clouds"

const PPCHero = ({data}) => {

    const heading               = data.heading ?? false
    const subHeading            = data.subHeading ?? false
    const circleImagesDown      = data.circleImagesDown ?? false 
    const circleImagesUp        = data.circleImagesUp ?? false 
    const componentButton       = data.componentButton ?? false 

    console.log(data)

    return(
        <>
        <section className="min-h-[839px]" style={{ clipPath: 'url(#clipCloud)' }}>
            <Container>
                {JSON.stringify(data)}
                {heading &&
                    <h1 dangerouslySetInnerHTML={{__html: Parser(heading)}} className={`mb-20 text-center`}></h1>
                }
                {subHeading &&
                    <p dangerouslySetInnerHTML={{__html: Parser(subHeading)}} className={`mb-20 text-center`}></p>
                }
                {circleImagesDown && 
                    <CustomSplide images={circleImagesDown} direction={'down'} position={'right'}/>
                }
                {circleImagesUp && 
                    <CustomSplide images={circleImagesUp} direction={'up'} position={'left'}/>
                }
            </Container>

            <DarkBlueCloud_Large className={`w-full absolute top-0 left-0 -z-[1]`} />

            <svg aria-hidden={true} width={0} height={0} viewBox="0 0 1919.54 1050" className={``}>
                <defs>
                    <clipPath id="clipCloud" clipPathUnits="objectBoundingBox" transform="scale(0.000521 0.000952)">
                        <path d="M0,0v664.44c.75,1.92,1.53,3.82,2.34,5.7,13.19,61.24,81,108.66,164.52,112.88,20.25,1.6,40.58.14,60-4.57,53.62-11.19,97.12-40.72,117.9-79.08,31.15,38.89,95.9,65.63,170.74,65.63,6.99,0,13.89-.24,20.69-.69,23.72,48.44,96.37,83.69,182.31,83.69,34.24,0,66.37-5.6,94.14-15.4,2.01,18.21,8.71,35.21,19.01,50.04,18.04,33.64,54.56,56.05,93.76,55.02,6.55.87,13.26,1.33,20.09,1.33,15.05,0,29.52-2.2,43.02-6.26,4.15,6.43,8.91,12.52,14.2,18.15,37.64,58.61,118.1,99.11,211.28,99.11,85.89,0,160.97-34.41,201.67-85.7,8.87,1.77,18,2.7,27.33,2.7,67.71,0,125.27-48.73,146.38-116.66,13.99,7.39,28.8,13.16,44.47,15.74,56.01,10.66,115.59-15.33,145.71-63.81,7.97-12.59,13.9-26.39,17.65-40.77.2-.74.38-1.46.55-2.19,19.95,43.98,65.79,77.14,121.78,86.2V0H0Z"/>
                    </clipPath>
                </defs>
            </svg>

        </section>
        <LightBlueCloud_Large className={`w-full absolute top-0 left-0 -z-[2]`} />
        </>
    )

}
export default PPCHero


const CustomSplide = ({images, direction, position}) => {
    return (
        <Splide
            className       = {`!absolute !visible top-0 ${position === 'right' ? 'right-0' :'right-[335px]'}`}
            aria-label      = {`images ${direction} carousel`}
            hasTrack        = { false }
            extensions      = { { AutoScroll } }
            options         = { {
                type        : `loop`,
                direction   : `ttb`,
                height      : `839px`,
                focus       : 'center',
                perPage     : 3,
                // perMove     : 1,
                gap         : `1.5rem`,
                drag        : false,
                rewindByDrag: false,
                pagination  : false,
                lazyLoad    : false,
                arrows      : false,
                breakpoints: {
                    640: {
                        perPage: 1,
                    },
                    1000: {
                        perPage: 3,
                    }
                },
                autoScroll  : {
                    pauseOnHover    : false,
                    pauseOnFocus    : false,
                    rewind          : true,
                    speed           : direction === 'down' ? -0.2 : 0.2,
                }
        }}>
            <SplideTrack>
                    {images.map((circle, key) => {
                        return (
                            <SplideSlide className="" key={key}>
                                <GatsbyImage 
                                    image       = {circle.image.localFile.childImageSharp.gatsbyImageData} 
                                    alt         = {circle.image.altText} 
                                    className   = {`flex self-start w-[335px] h-[335px]`} 
                                    objectFit   = {'contain'}/>
                            </SplideSlide>
                        )
                    })}
            </SplideTrack>
        </Splide>
    )
}