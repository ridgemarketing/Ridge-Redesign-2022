import React from "react" 
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'
import BlogCard from '../../components/BlogCard.js'

const PostCards = (props) => {
    
    // const content = props.layoutData.layoutContent;
    // const settings = props.layoutData.layoutSettings;
    // const image = getImage(content.componentFlexibleMedia.image);
    
return (
    <></>
)
}
export default PostCards

export const query = graphql`
  fragment PostCards on WpPage_Flexiblelayouts_Layouts {
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