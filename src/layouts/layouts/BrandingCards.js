import React from "react"
import { Section, Container } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import Buttons from '../../components/global/Buttons'
import { graphql } from "gatsby"

const BrandingCards = (props) => {

    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const cards = content.cards;

    const paddingTopMap = {
      "24_pixels": "pt-6",
      "32_pixels": "pt-8",
      "48_pixels": "pt-12",
    };
    
    const paddingBottomMap = {
      "24_pixels": "pb-6",
      "32_pixels": "pb-8",
      "48_pixels": "pb-12",
    };

    return (
        <Section classes={"relative"} settings={settings}>
            <div className={'absolute top-0 h-[280px] bg-black w-full'}></div>
             <Container container={settings.containerWidth}>
               <p className={`${theme.text.H2} text-center text-white`}>{content.heading}</p>
                <div className={"flex flex-wrap gap-x-7 gap-y-16 py-24 justify-center"}>
                    {cards.map((card, index) => {
                        return (
                            <div key={`BrandingCard__${card.image.guid}__${index}`} className={"bg-white max-w-[320px] w-full shadow-brandcard flex justify-center align-center h-[200px]"}>
                                <img className={`
                                ${paddingTopMap[card.imagePaddingTop] || "pt-12"} 
                                ${paddingBottomMap[card.imagePaddingBottom] || "pb-12"} px-10 object-contain`} 
                                src={card.image.sourceUrl} 
                                alt={card.image.altText} />
                            </div>
                        )
                    })}
                </div>

                {content.bottomHeading &&
                  <p className={`${theme.text.H5} text-center`}>{content.bottomHeading}</p>
                }
                {content.componentButton &&
                  <div className={`text-center pt-4 ${content.bottomHeading && `mt-10`}`}>
                      <Buttons content={content.componentButton} sectionBackground={settings.backgroundColor}/>  
                  </div>
                }
            </Container>
        </Section>
    )
}

export default BrandingCards

export const query = graphql`
  fragment BrandingCardsPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_BrandingCards {
        fieldGroupName
        layoutBrandingCards {
          layoutContent {
            heading
            cards {
                image {
                    altText
                    guid
                    sourceUrl
                }
                imagePaddingTop
                imagePaddingBottom
            }
            bottomHeading
            componentButton {
                fieldGroupName
                colors {
                  fieldGroupName
                  resting
                }
                link {
                  url
                  title
                  target
                }
                style
            }
          }
          layoutSettings {
            padding {
              bottom
              top
            }
            anchorId
            backgroundColor
            classes
            id
          }
        }
    }
  }
`
export const serviceQuery = graphql`
  fragment BrandingCardsService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_BrandingCards {
        fieldGroupName
        layoutBrandingCards {
          layoutContent {
            heading
            cards {
                image {
                    altText
                    guid
                    sourceUrl
                }
                imagePaddingTop
                imagePaddingBottom
            }
            bottomHeading
            componentButton {
                fieldGroupName
                colors {
                  fieldGroupName
                  resting
                }
                link {
                  url
                  title
                  target
                }
                style
            }
          }
          layoutSettings {
            padding {
              bottom
              top
            }
            anchorId
            backgroundColor
            classes
            id
          }
        }
    }
  }
`
export const projectQuery = graphql`
  fragment BrandingCardsProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_BrandingCards {
        fieldGroupName
        layoutBrandingCards {
          layoutContent {
            heading
            cards {
                image {
                    altText
                    guid
                    sourceUrl
                }
                imagePaddingTop
                imagePaddingBottom
            }
            bottomHeading
            componentButton {
                fieldGroupName
                colors {
                  fieldGroupName
                  resting
                }
                link {
                  url
                  title
                  target
                }
                style
            }
          }
          layoutSettings {
            padding {
              bottom
              top
            }
            anchorId
            backgroundColor
            classes
            id
          }
        }
    }
  }
`