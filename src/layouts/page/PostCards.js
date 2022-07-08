import React from "react" 
import { graphql, useStaticQuery } from "gatsby"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'
import BlogCard from '../../components/BlogCard.js'

const PostCards = (props) => {

    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    
    const allPosts = useStaticQuery( graphql`
      query GetPosts {
        allWpPost {
          nodes {
            title
            content
            link
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            categories {
              nodes {
                id
                name
              }
            }
            tags {
              nodes {
                id
                name
              }
            }
          }
        }
      }
    `)

    const posts         = allPosts.allWpPost.nodes;
    const taxonomy      = content.taxonomy;
    let cards           = [];

    for(let a =0; taxonomy.length > a; a++){
      for(let b =0; posts.length > b; b++){
        for(let c =0; posts[b].categories.nodes.length > c; c++){
          if(taxonomy[a].name == posts[b].categories.nodes[c].name){
            if (cards.length >= 3){}else{
              cards.push(posts[b]);
            }
          }
        }
      }
    }
    console.log('postcards', taxonomy, posts, cards);

    //let cards = [{heading: "Send Marketing Emails? Get the Mop! Time for Email List Cleaning..."}, {heading: "How Apple's IOS Update Will Change Email Marketing"}, {heading: "Marketing Value Misconceptions: Is Your Strategy a Tragedy?"}]

return (
  <>
    <Section settings={settings}>
      <Container>
          {content.heading &&
            <h2 className={ theme.text.H2 + `text-center`}>
              {content.heading}
            </h2> 
          }
          {content.body &&
            <p className={theme.text.P_STD + `mt-6 text-center`}>
              {content.body}
            </p>
          }
          <div>    
            <div className="mt-12 flex w-full flex-col items-center lg:items-stretch justify-between lg:flex-row lg:flex-wrap lg:justify-between">
              {
                cards.map((card) => {
                  return <BlogCard
                      heading = {card.title}
                      link    = {`/blog` + card.link || ` `}
                      image   = {card.featuredImage.node.localFile.childImageSharp.gatsbyImageData || ` `}
                  />
                })
              }
            </div>
          </div>
    </Container>
  </Section>
</>
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
            body
            taxonomy {
                id
                name
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
  fragment PostCardsService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_PostCards {
        fieldGroupName
        layoutPostCards {
          layoutContent {
            heading
            body
            taxonomy {
                id
                name
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