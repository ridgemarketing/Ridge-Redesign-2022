import React from "react" 
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { theme } from '../../static/theme.js'
import { Container, Section } from '../../components/global/Wrappers.js'
import { IconCard } from `../../components/ResultItems.js`

const ThreeColIconsText = ({ props }) => {
    
    const content = props.layoutData.layoutContent;
    const settings = props.layoutData.layoutSettings;
    const image = getImage(content.componentFlexibleMedia.image);
    
    useEffect(() => {
        window.addEventListener('load', function(){
          if ( document.getElementsByClassName('threeColIconsText').length > 0 ){
              const allimg  = document.getElementsByClassName('threeColIconsText')[0].getElementsByTagName('img');
              const allText = document.getElementsByClassName('threeColIconsText')[0].getElementsByClassName('icon-block-title');
  
              let heights = [];
              let currentHeight;
  
              for ( let i = 0; allText.length > i; i++ ){
                heights.push(allText[i].clientHeight);
              }
  
              for ( let i = 0; heights.length > i; i++ ){
                currentHeight = heights[i];
                  for ( let z = 0; allText.length > z; z++ ){
                    if(allText[z].clientHeight < currentHeight){
                      allText[z].style.height = currentHeight + 'px';
                    }
                  }
              }
  
              for ( let i = 0; allText.length > i; i++ ){
                  if( allText[i].clientHeight > allimg[i].clientHeight ){
                      allimg[i].style.marginTop = ( allText[i].clientHeight - allimg[i].clientHeight )/2 + 'px' ;
                  }
                  if( allText[i].clientHeight < allimg[i].clientHeight){
                      allText[i].parentNode.style.height = allimg[i].clientHeight + 'px';
                  }
              }
          }
        })
    });

    return(
        <Section Settings={ settings }>
            <Container>
                {content.heading &&
                    <> 
                        <h2>
                            <span 
                                className={ 
                                            theme.text['H2'] 
                                            + ' text-' + content.textColor 
                                            + ' text-' + content.textAlign
                                         }> 
                                { content.heading }
                            </span>
                        </h2>
                    </>
                }
                {content.bodyText &&
                    <>
                        <p>
                            <span className={ 
                                            theme.text['P_STD'] 
                                            + ' text-' + content.textColor 
                                            + ' text-' + content.textAlign
                                        }>
                                { content.bodyText }
                            </span>
                        </p>
                    </>
                }

                <div className="flex w-full flex-wrap justify-between threeColIconsText">
                    <IconCard
                        orientation     = { content.col.stacked }

                        heading         = { content.col.heading }
                        bodyText        = { content.col.bodyText }
                        image           = { image }
                    />
                </div>

                {content.subHeading &&
                    <>
                        <h2>
                            <span
                                className={ 
                                        theme.text['H2'] 
                                        + ' text-' + content.textColor 
                                        + ' text-' + content.textAlign
                                    }> 
                                { content.subHeading }
                            </span>
                        </h2>
                    </>
                }
                {content.button &&
                    <>
                        <Link
                            className={ 
                                theme.button['BASE_STYLING'] + 
                                theme.button[ context.button.color ] + 
                                'w-[210px] h-min '}
                            to={ content.button.url }
                        >
                        { content.button.heading }
                        </Link>
                    </>
                }
            </Container>
        </Section>
    )
}
export default ThreeColIconsText;