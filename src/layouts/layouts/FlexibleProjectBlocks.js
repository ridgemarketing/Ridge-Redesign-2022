import React, { useState } from "react" 
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers'
import { graphql } from "gatsby"
import Buttons from "../../components/global/Buttons"
import Parser from "../../components/global/Parser"
import Vimeo from '@u-wave/react-vimeo'

const ProjectBlock = ({block, type, index})  => {
  const [overlay, setOverlay]         = useState(false);
  const togglePopup = () =>{
      if(overlay === false){
          setOverlay(true);
          document.body.classList.add("overflow-hidden");
      }
      if(overlay === true){
          setOverlay(false);
          document.body.classList.remove("overflow-hidden");
      }
  }
  return(
    <>
      <div key={`FlexibleProjectItem__${block.featuredImage.guid}__${index}`} className={`flex flex-col justify-center items-center w-[375px] mx-auto pb-8 md:pb-0`}>
          <div className={`mt-3 h-full w-full relative group`}>
            <div className={`w-full h-full flex flex-col justify-center items-center`}>
                {type === `project` &&
                    <Link to={block.link ? block.link.url : `#`} className={`h-full flex flex-col justify-center items-center`}>
                      <div className={`w-3/4 mx-auto block`}>
                        <GatsbyImage image={block.featuredImage.localFile.childImageSharp.gatsbyImageData} alt={`${block.title} logo`} className={`object-contain`} />
                      </div>
                      <div className="flex-1 flex flex-col justify-end">
                        <span className={ theme.text_links.BASE_STYLING + theme.text_links.STD + theme.text_links.FWD_BASE + theme.text_links.ARW_FWD_BLACK + theme.text_links.HOVER_GREEN + theme.text_links.HOVER_ARW_FWD_GREEN + ' mt-3 justify-center'}>
                          { block.heading }
                        </span>
                      </div>
                    </Link>
                  }

                {type ===  `video` && 
                  <div role="button" onClick={()=>togglePopup()} onKeyDown={()=>togglePopup()}>
                    <div className={`mx-auto block`}>
                      <GatsbyImage image={block.featuredImage.localFile.childImageSharp.gatsbyImageData} alt={`${block.title} logo`} className={`object-contain`} />
                    </div>
                    <div className="flex-1 flex flex-col justify-end">
                      <span className={ theme.text_links.BASE_STYLING + theme.text_links.STD + theme.text_links.FWD_BASE + theme.text_links.ARW_FWD_BLACK + theme.text_links.HOVER_GREEN + theme.text_links.HOVER_ARW_FWD_GREEN + ' mt-3 justify-center min-h-16'}>
                        { block.heading }
                      </span>
                    </div>
                  </div>
                }
            </div>
          </div>
      </div>
    {type === `video` &&
        <div className={`fixed top-0 left-0 h-screen w-screen`} style={{display: overlay ? 'block':'none', visibility: overlay ? 'visible':'hidden', zIndex:overlay ? '50':'0'}} aria-label="lightbox" aria-expanded={overlay}>
        <div className={`relative z-10 w-full h-full flex flex-col items-center justify-center`}>

          <div className={`w-[95%] md:w-3/4 lg:w-[40%] h-max relative flex flex-col justify-center items-center`}>
          <button 
            className={`absolute z-50 text-rm-white p-2 -top-[50px] right-0`} 
            aria-label="Close Lightbox" 
            onClick={()=>togglePopup()} 
            onKeyDown={()=>togglePopup()} 
            tabIndex={0}
          >
            <svg width="26" height="24" viewBox="0 0 26 24" fill="none">
              <path d="M2 2L23.1852 22" stroke="#F1F5F5" strokeWidth="3" strokeLinecap="round"/>
              <path d="M24 2L2.81482 22" stroke="#F1F5F5" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </button>
          
          <div className={'pt-[56.25%] w-full relative'}>
          <Vimeo
                  video={block.videoSource}
                  muted
                  responsive
                  autoplay={false}
                  loop={false}
                  className={`absolute top-0 left-0 w-full h-full object-cover`}
                />
          </div>
          </div>

        </div>
        <div className={`absolute top-0 left-0 w-full z-0 h-full bg-rm-black opacity-30`} aria-hidden="true"></div>
      </div>  
    }
  </>
  )
}

const FlexibleProjectBlocks = (props) => {

    const content         = props.layoutData.layoutContent;
    const settings        = props.layoutData.layoutSettings;

    let transparent                     = 'transparent';
    const textColor                     = settings.backgroundColor === 'black' ? 'white' : 'black';

    return(
        <Section settings={ settings } transparent = { transparent }>
            {content.overlapEffect === `top-black` &&
              <div className={`absolute top-0 left-0 w-full bg-black ${theme.paddingTop[settings.padding.top]} ${content.heading ? `pb-[14rem]` : `pb-[10rem]`}`}></div>
            }

            {content.overlapEffect === `top-pale-grey` &&
              <div className={`absolute top-0 left-0 w-full bg-rm-pale-grey ${theme.paddingTop[settings.padding.top]} ${content.heading ? `pb-[14rem]` : `pb-[10rem]`}`}></div>
            }
            <Container>
                {content.heading &&
                  <h2 dangerouslySetInnerHTML={{__html: Parser(content.heading)}} className={`${theme.text.H2} mb-20 text-center ${textColor}`}></h2>
                }
                {content.blocks &&
                  <div className={`md:grid md:grid-cols-2 lg:grid-cols-3 gap-12`}>
                      {content.blocks.map((block, index) => {
                        return <ProjectBlock block={block} type={content.type} index={index} />
                      })}
                  </div>
                }
            </Container>
        </Section>
    )
}
export default FlexibleProjectBlocks;

export const query = graphql`
  fragment FlexibleProjectBlocksPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_FlexibleProjectBlocks {
        fieldGroupName
        layoutFlexibleProjectBlocks {
          layoutContent {
            type
            overlapEffect
            heading
            blocks {
              featuredImage {
                guid
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              heading
              videoSource
              link {
                url
              }
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
  fragment FlexibleProjectBlocksService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_FlexibleProjectBlocks {
        fieldGroupName
        layoutFlexibleProjectBlocks {
          layoutContent {
            type
            overlapEffect
            heading
            blocks {
              featuredImage {
                guid
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              heading
              videoSource
              link {
                url
              }
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
  fragment FlexibleProjectBlocksProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_FlexibleProjectBlocks {
        fieldGroupName
        layoutFlexibleProjectBlocks {
          layoutContent {
            type
            overlapEffect
            heading
            blocks {
              featuredImage {
                guid
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              heading
              videoSource
              link {
                url
              }
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
