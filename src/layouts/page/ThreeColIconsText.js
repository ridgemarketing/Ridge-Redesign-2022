// import React from "react" 
// import { graphql } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"
// import { theme } from '../../static/theme.js'
// import { Container, Section } from '../../components/global/Wrappers.js'
// import { IconCard } from `../../components/ResultItems.js`

// const ThreeColIconsText = ({ props }) => {
    
//     const content = props.layoutData.layoutContent;
//     const settings = props.layoutData.layoutSettings;
//     const image = getImage(content.componentFlexibleMedia.image);

//     return(
//         <Section Settings={ settings }>
//             <Container>
//                 {content.heading &&
//                     <> 
//                         <h2>
//                             <span 
//                                 className={ 
//                                             theme.text['H2'] 
//                                             + ' text-' + content.textColor 
//                                             + ' text-' + content.textAlign
//                                          }> 
//                                 { content.heading }
//                             </span>
//                         </h2>
//                     </>
//                 }
//                 {content.bodyText &&
//                     <>
//                         <p>
//                             <span className={ 
//                                             theme.text['P_STD'] 
//                                             + ' text-' + content.textColor 
//                                             + ' text-' + content.textAlign
//                                         }>
//                                 { content.bodyText }
//                             </span>
//                         </p>
//                     </>
//                 }

                // <div className="flex w-full flex-wrap justify-between threeColIconsText">
                //     <IconCard
                //         heading         = { content.col.heading }
                //         bodyText        = { content.col.bodyText }
                //         image           = { image }
                //     />
                // </div>

//                         heading         = { content.col.heading }
//                         bodyText        = { content.col.bodyText }
//                         image           = { image }
//                     />
//                 </div>

//                 {content.subHeading &&
//                     <>
//                         <h2>
//                             <span
//                                 className={ 
//                                         theme.text['H2'] 
//                                         + ' text-' + content.textColor 
//                                         + ' text-' + content.textAlign
//                                     }> 
//                                 { content.subHeading }
//                             </span>
//                         </h2>
//                     </>
//                 }
//                 {content.button &&
//                     <>
//                         <Link
//                             className={ 
//                                 theme.button['BASE_STYLING'] + 
//                                 theme.button[ context.button.color ] + 
//                                 'w-[210px] h-min '}
//                             to={ content.button.url }
//                         >
//                         { content.button.heading }
//                         </Link>
//                     </>
//                 }
//             </Container>
//         </Section>
//     )
// }
// export default ThreeColIconsText;