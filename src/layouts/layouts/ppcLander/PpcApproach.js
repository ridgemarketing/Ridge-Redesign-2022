import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container } from "../../../components/global/Wrappers"
import Parser from "../../../components/global/Parser"
import { theme } from "../../../static/theme"

const PPCApproach = ({data}) => {

    const heading   = data.heading ?? false
    const body      = data.body ?? false
    const image     = data.image ?? false

    let renderImage
    if (image) {
        renderImage = (image.localFile?.ext === `.svg`)
            ? <img className="w-full max-w-[1122px] mx-auto" src={image.sourceUrl} alt={image?.altText || ''} />
            : image.localFile?.childImageSharp?.gatsbyImageData
                ? <GatsbyImage
                    image={image.localFile.childImageSharp.gatsbyImageData}
                    alt={image?.altText || ''}
                    className="w-full max-w-[1122px] mx-auto"
                    objectFit="contain" />
                : null
    }

    return(<>
        <section className="py-20">
            <Container container="slim" classes="flex flex-col items-center gap-8 text-center">
                {heading &&
                    <h2
                        dangerouslySetInnerHTML={{__html: Parser(heading)}}
                        className={`${theme.text.H5} text-black`}
                    />
                }
                {body &&
                    <p
                        dangerouslySetInnerHTML={{__html: Parser(body)}}
                        className={`${theme.text.H4_LTE} text-rm-grey max-w-[958px]`}
                    />
                }
                {renderImage &&
                    <div className="mt-4 w-full">
                        {renderImage}
                    </div>
                }
            </Container>
        </section>
    </>)
}

export default PPCApproach
