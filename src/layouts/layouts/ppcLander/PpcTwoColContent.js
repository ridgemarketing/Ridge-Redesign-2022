import React, { useEffect, useRef } from "react"
import { TopCloud_Large, TopCloudPiece_Large, TopCloudPiece_Medium, TopCloudPiece_Small } from "../../../static/clouds"
import { Container } from "../../../components/global/Wrappers"
import Parser from "../../../components/global/Parser"
import { theme } from "../../../static/theme"

const PPCTwoColContent = ({data}) => {

    const checklist     = data.checklist ?? false
    const videoText     = data.videoText ?? false

    const video         = useRef(null)

    useEffect( () => {
        if (!video.current) return

        const observer = new IntersectionObserver( (entries) => {
            entries.forEach ( entry => {
                if( entry.isIntersecting ){
                    entry.target.play()
                }
            })
        })

        observer.observe(video.current)

        return () => {
            observer.disconnect()
        }
    }, [])

    return(<>
        <section className="pt-[60px] relative bg-gradient-to-t from-[#edf8f9] via-[#f3f9f9] via-47% to-white">
            <Container classes={`flex flex-col xl:flex-row gap-8 flex-nowrap justify-center items-center xl:p-0 pb-20 xl:pb-20`}>
                <div className="flex flex-col gap-6 flex-1">
                    {videoText?.heading &&
                        <h2 dangerouslySetInnerHTML={{__html: Parser(videoText.heading)}} className={`text-center xl:text-left max-w-[750px] mx-auto xl:max-w-full text-[2.5rem] leading-[2.75rem] font-stratos text-black uppercase`}></h2>
                    }
                    {videoText?.body &&
                        <p dangerouslySetInnerHTML={{__html: Parser(videoText.body)}} className={`text-center xl:text-left ${theme.text.H4_LTE} text-rm-grey`}></p>
                    }
                </div>
                {videoText?.video?.mediaItemUrl &&
                    <video ref={video} className="aspect-video rounded-3xl flex-1 w-full max-w-[630px] xl:w-1/2" autoPlay={false} muted={true} controls={false} loop={true}>
                        <source src={videoText?.video?.mediaItemUrl} type={videoText?.video?.mimeType}/>
                    </video>
                }
            </Container>
            <Container classes={`pt-5 md:pt-[60px] xl:pb-20 flex flex-col gap-12`}>
                {checklist.heading &&
                    <h2 dangerouslySetInnerHTML={{__html: Parser(checklist.heading)}} className={`text-[2rem] leading-[2.2rem] font-semibold font-stratos text-black uppercase text-center`}></h2>
                }
                {checklist.list && 
                    <ul className="max-w-[750px] w-full mx-auto sm:px-4 md:px-0 sm:columns-2 gap-16">
                        {checklist.list.map((item, key) => {
                            return(
                                <li className="flex items-center gap-4 mb-6 font-basic-sans font-normal text-[1.625rem] leading-[1.875rem] " key={key}>
                                    <svg className="w-[25px]" aria-hidden={true} width="26" height="20" viewBox="0 0 26 20" fill="none">
                                        <path d="M8.81055 19.0176L0.380859 10.5879C-0.126953 10.0801 -0.126953 9.2168 0.380859 8.70898L2.20898 6.88086C2.7168 6.37305 3.5293 6.37305 4.03711 6.88086L9.77539 12.5684L21.9629 0.380859C22.4707 -0.126953 23.2832 -0.126953 23.791 0.380859L25.6191 2.20898C26.127 2.7168 26.127 3.58008 25.6191 4.08789L10.6895 19.0176C10.1816 19.5254 9.31836 19.5254 8.81055 19.0176Z" fill="#1F9DA5"/>
                                    </svg>
                                    {item.item}
                                </li>
                            )
                        })}
                    </ul>
                }
            </Container>
        </section>
        <TopCloudPiece_Large className={`w-full hidden xl:block mb-[150px] cloudAnimation-Top -z-[10] relative`} />
        <TopCloudPiece_Medium className={`w-full hidden md:block xl:hidden mb-[150px] cloudAnimation-Top -z-[10] relative`} />
        <TopCloudPiece_Small className={`w-full md:hidden mb-[150px] -mt-[75px] sm:-mt-[150px] cloudAnimation-Top -z-[10] relative`} />
    </>)
}

export default PPCTwoColContent