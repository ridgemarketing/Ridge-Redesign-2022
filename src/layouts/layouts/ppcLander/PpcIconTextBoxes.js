import React, { useRef, useEffect } from "react"
import { Container } from "../../../components/global/Wrappers"
import { theme } from "../../../static/theme"
import Buttons from "../../../components/global/Buttons"
import IconTextBoxFlex from "../../../components/IconTextBoxFlex"

const PPCIconTextBoxes = ({data}) => {

    const badge             = data.badge ?? false
    const heading           = data.heading ?? false
    const icons             = data.icons ?? false
    const buttons           = data.buttons ?? false
    const dataFetchedRef    = useRef(false)
    const iconContainer     = useRef(null)

    const calcHeight = () => {

        const setHeight = () => {
            let colOneHeight = 0
            let colTwoHeight = 0
            
            if (window.innerWidth > 767 && iconContainer.current !== null) {
            
                for (var i =0; i < iconContainer.current.children.length; i++) {
                    if (i >= iconContainer.current.children.length / 2){
                        colOneHeight = colOneHeight + iconContainer.current.children[i].clientHeight + 64
                    } else {
                        colTwoHeight = colTwoHeight + iconContainer.current.children[i].clientHeight + 64
                    }
                }

                if ( !(colOneHeight >= colTwoHeight)) {
                    colOneHeight = colTwoHeight
                }
            
            } else if (iconContainer) {
                iconContainer.current.setAttribute('style','height:100%')
            }
        }
        setHeight()
        
        window.addEventListener('resize', setHeight)
        return ()=> window.removeEventListener('resize', setHeight)
    
    }
    useEffect(() => {
        if (dataFetchedRef.current) {
            return
        }
        dataFetchedRef.current = true
        calcHeight()
    }, [])

    return(<>
        <section className="bg-black relative mt-[177px] text-white">
            {badge &&
                <img src={badge.sourceUrl} className="-mt-[177px] mx-auto absolute left-1/2 -translate-x-1/2" width={355} height={355}/>
            }
            <Container classes="pt-20 pb-[100px]">
                {heading && 
                    <h2 className={`mt-[177px] ${theme.text.H2} text-white text-center`}>{heading}</h2>
                }
                {icons && <>
                    <div ref={iconContainer} className={`grid gap-x-8 gap-y-6 md:grid-cols-2 md:gap-y-12 xl:grid-cols-3 gap-8 max-w-[1100px] mx-auto mt-24 w-full flex-wrap justify-between md:flex-row md:flex-wrap threeColIconsText`}>
                        {icons.map((icon, key) => {
                            {icon.image = icon.icon}
                            return <IconTextBoxFlex 
                                        key         ={`iconTextBoxFlex_${key}`} 
                                        iconType    ={`icon`} 
                                        // idx         ={idx+1} 
                                        textColor   ={`text-white`} 
                                        columns     ={`3`}
                                        lowercase   ={true} 
                                        content     ={icon}/>
                        })}
                    </div>
                </>}
                {buttons && <>
                   <div className="w-max mt-3 mx-auto flex gap-4 text-white">
                        {buttons.map((button, key) => {
                            if (button?.componentButton?.link?.url) {
                                return <Buttons key={key} content={button.componentButton} />
                            }
                        })}
                    </div>
                </>}
            </Container>
        </section>
    </>)
}

export default PPCIconTextBoxes