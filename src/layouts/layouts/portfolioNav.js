import React from "react"
import { Container, Section } from "../../components/global/Wrappers"
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { theme } from "../../static/theme"
import { graphql } from "gatsby"

const headerMenu = useStaticQuery(graphql`
query GetHeaderMenu {
    allWpMenu(filter: {name: {eq: "Portfolio Filter Menu"}}) {
    nodes {
        menuItems {
        nodes {
            url
            label
            parentId
            childItems {
            nodes {
                url
                label
                parentId
                acfWpMenu {
                    icon {
                        sourceUrl
                    localFile {
                        ext
                        childImageSharp {
                        gatsbyImageData
                        }
                    }
                    }
                }
            }
            }
        }
        }
    }
    }

    allWp {
            nodes {
            globalSettings {
                globalSettings {

                    logos {
                        light {
                        localFile {
                            ext
                            childImageSharp {
                            gatsbyImageData
                            }
                        }
                        altText
                        sourceUrl
                        }

                        dark {
                            localFile {
                                ext
                                childImageSharp {
                                gatsbyImageData
                                }
                            }
                            sourceUrl
                            }

                    }
                }
            }
        }
    }

}
`);


const PortfolioNav = (props) => {
    const content       = props.layoutData.layoutContent;
    const settings      = props.layoutData.layoutSettings;

    return (
        <Container>
            {content.heading.green && content.heading.black && 
                <h2 className={theme.text.HERO + 'mb-9'}>
                    <span className="text-rm-black">
                    {content.heading.black}
                    </span>
                    <span className="text-rm-green">
                    {content.heading.green + " "}
                    </span>
                </h2>
            }
          </Container>
    )
}

export default PortfolioNav;