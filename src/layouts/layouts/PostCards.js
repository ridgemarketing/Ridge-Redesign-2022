import React from "react" 
import { graphql, useStaticQuery } from "gatsby"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers'
import BlogCardHome from '../../components/BlogCardHome'

const PostCards = (props) => {

    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    
    const allPosts = useStaticQuery( graphql`
      query GetPosts {
        allWpPost(sort: {date: DESC}, limit: 3) {
          nodes {
            date
            guid
            title
            content
            link
            blogFields {
              additionalBlogFields {
                squareImage {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                altText
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

    //console.log('post cards',posts, content);

    for(let a =0; taxonomy.length > a; a++){
      for(let b =0; posts.length > b; b++){
        for(let c =0; posts[b].categories.nodes.length > c; c++){
          if(taxonomy[a].name === posts[b].categories.nodes[c].name){
            if (cards.length >= 3){}else{
              cards.push(posts[b]);
            }
          }
        }
      }
    }
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
                cards.map((card, index) => {
                  return <BlogCardHome
                      key     = {`BlogCardItem__${card.guid}__${index}`}
                      heading = {card.title}
                      link    = {`/blog` + card.link || ` `}
                      image   = {card.blogFields?.additionalBlogFields?.squareImage?.localFile?.childImageSharp?.gatsbyImageData ? card.blogFields.additionalBlogFields.squareImage.localFile.childImageSharp.gatsbyImageData : (card?.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData || ` `)}
                      alt     = {card.featuredImage.node.altText}
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
export const projectQuery = graphql`
  fragment PostCardsProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_PostCards {
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

// const PostCards = (props) => {
    
//   const content = props.layoutData.layoutContent;
//   const settings = props.layoutData.layoutSettings;

//   let cards = [{heading: "Send the Marketing Emails? Get the Mop! Time for Email List Cleaning..."}, {heading: "How Apple's IOS Update Will Change Email Marketing"}, {heading: "Marketing Value Misconceptions: Is Your Strategy a Tragedy?"}]
  
// return (
// <Section settings={settings}>
// <Container>
//     {content.heading &&
//       <h2 className={`${theme.text['H2']} text-center`}>{content.heading}</h2> 
//     }
//     {content.bodyText &&
//       <p className={`${theme.text['H2']}`}>{content.body}</p>
//     }
//         <div className={'max-w-[1080px] mx-auto'}>    
//           <div className="mt-12 flex w-full flex-col items-center lg:items-stretch justify-between lg:flex-row lg:flex-wrap lg:justify-between">
//             {
//               cards.map((card) => {
//                 return <BlogCard
//                     heading = {card.heading}
//                     link    = {card.link || ` `}
//                     image   = {card.image || ` `}
//                 />
//               })
//             }
//             </div>
//         </div>
// </Container>
// </Section>
// )
// }
// export default PostCards
