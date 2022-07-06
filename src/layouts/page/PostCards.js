import React from "react" 
import { graphql } from "gatsby"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'
import BlogCard from '../../components/BlogCard.js'

const PostCards = (props) => {
    
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;

    let cards = [{heading: "Send the Marketing Emails? Get the Mop! Time for Email List Cleaning..."}, {heading: "How Apple's IOS Update Will Change Email Marketing"}, {heading: "Marketing Value Misconceptions: Is Your Strategy a Tragedy?"}]
    
return (
  <Section settings={settings}>
  <Container>
      {content.heading &&
        <h2 className={`${theme.text['H2']} text-center`}>{content.heading}</h2> 
      }
      {content.bodyText &&
        <p className={`${theme.text['H2']}`}>{content.body}</p>
      }
          <div className={'max-w-[1080px] mx-auto'}>    
            <div className="mt-12 flex w-full flex-col items-center lg:items-stretch justify-between lg:flex-row lg:flex-wrap lg:justify-between">
              {
                cards.map((card) => {
                  return <BlogCard
                      heading = {card.heading}
                      link    = {card.link || ` `}
                      image   = {card.image || ` `}
                  />
                })
              }
              </div>
          </div>
  </Container>
</Section>
)
}
export default PostCards

export const query = graphql`
  fragment PostCardsPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_PostCards {
        fieldGroupName
        layoutPostCards {
          layoutContent {
            heading
            taxonomy {
                id
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