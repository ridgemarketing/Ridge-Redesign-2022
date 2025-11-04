import React, { useRef, useEffect } from 'react'
import { Section, Container } from "../../components/global/Wrappers"
import { theme } from "../../static/theme"
import { graphql } from "gatsby"
import IconTextBoxStack from '../../components/IconTextBoxStack'
import IconTextBoxFlex from '../../components/IconTextBoxFlex'
import Buttons from '../../components/global/Buttons'
import Parser from "../../components/global/Parser"

const IconTextBoxes = (props) => {
  const content  = props.layoutData.layoutContent;
  const settings = props.layoutData.layoutSettings;

  let textColor = 'text-black';

  const dataFetchedRef = useRef(false);
  const iconContainer = useRef(null);
  let flexDirection =  ``;
  if(settings.classes){
    if (settings.classes.includes(`columnOrder`)){
      flexDirection =  `md:flex-col md:flex-wrap`;
    }
    else if (settings.classes.includes('rowOrder')) {
      flexDirection = 'md:flex-row md:flex-wrap';
    }
  }
  const calcHeight = () =>{
    if(settings.classes){
      if (settings.classes.includes(`flexDirection`)){
        
        function setHeight(){
          let colOneHeight =0, colTwoHeight =0;
          if(window.innerWidth > 767 && iconContainer.current !== null){
            
            for (var i =0; i < iconContainer.current.children.length; i++){
              if(i >= iconContainer.current.children.length/2){
                  colOneHeight = colOneHeight + iconContainer.current.children[i].clientHeight + 64;//mb-16 equivalent
              }else{
                  colTwoHeight = colTwoHeight + iconContainer.current.children[i].clientHeight +64;
                }
            }

            if( colOneHeight >= colTwoHeight){}else{
              colOneHeight = colTwoHeight;
            }
            // iconContainer.current.setAttribute('style',`height:${colOneHeight}px`);
          
          }else if (iconContainer) {
            iconContainer.current.setAttribute('style',`height:100%;`);
          }
        }
        setHeight();
        window.addEventListener('resize', setHeight);
        return ()=>window.removeEventListener('resize', setHeight);

      }
    }
  }
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    calcHeight();
  }, [])


  let headingfont;
  if(content.body){
      headingfont = theme.text['H2'];
  }else{
      headingfont = theme.text['H1_STD'];
  }

  const bottomHeadingMargin = (content.settings.type === 'stack') ? 'lg:mt-20' : '';
  if (settings.backgroundColor === 'black') {
    textColor = 'text-white';
  }
    const cols = content.settings.columns === 3 ? 'xl:grid-cols-3' : '';
    //added code to dynamically set mt on wrapper div depending on stack or flex (icon placement affects margin needed)
    const wrapperClasses = (content.settings.type === 'stack') ? `${(content.heading || content.subheading) ? 'mt-16' : 'mt-0'} grid gap-x-8 gap-y-6 md:grid-cols-2 md:gap-y-12 ${cols} gap-8 max-w-[1100px] mx-auto` : `${(!content.heading && !content.subheading) ? 'mt-0' : 'mt-24'} flex w-full flex-wrap justify-between ${flexDirection} threeColIconsText`;

  return (
      <Section settings={settings}>
          <Container container={settings.containerWidth}>
          <div>
            {content.heading &&
              <h2 className={`text-center mb-14 ${textColor} ${headingfont}`} dangerouslySetInnerHTML={{__html: Parser(content.heading)}}>
              </h2>
            }
          {content.body &&
          //testing removal of mb from p below and adding to icon box wrapper class
          <p dangerouslySetInnerHTML={{__html: Parser(content.body)}} className={`${theme.text.P_STD} max-w-[1120px] mx-auto text-center ${textColor}`}></p>
          }
          {content.subheading &&
          <p className={`mt-10 text-center ${textColor}`}>
              <span dangerouslySetInnerHTML={{__html: Parser(content.subheading)}} className={theme.text.H4}></span>
          </p>
          }
          </div>

          <div ref={iconContainer} className={wrapperClasses}>
              {content.boxes && content.boxes.map((item, idx) => {
                  return (content.settings.type === 'stack') ? <IconTextBoxStack key={`iconTextBoxStack${idx}${Math.random()}`} idx={idx+1} textColor={textColor} content={item} iconType={content.settings.feature}/> : <IconTextBoxFlex key={`iconTextBoxFlex${idx}${Math.random()}`} iconType={content.settings.feature} idx={idx+1} textColor={textColor} columns={content.settings.columns} content={item}/>;
              })}
          </div>

          <div>
              {content.bottomHeading &&
              <h3 className={`mt-10 ${bottomHeadingMargin} mb-12 text-center ${textColor}`}>
                  <span dangerouslySetInnerHTML={{__html: Parser(content.bottomHeading)}} className={theme.text.H5}></span>
              </h3>
              }
              {content.bottomBody &&
              <p className={ `mt-16 text-center ${textColor} lg:w-3/4 ml-auto mr-auto`}>
                  <span dangerouslySetInnerHTML={{__html: Parser(content.bottomBody)}} className={theme.text.P_STD}></span>
              </p>
              }
              {content.componentButton && content.componentButton.link &&
                <div className='text-center my-8'>
                  <Buttons 
                    content={content.componentButton} 
                    sectionBackground={settings.backgroundColor}/>
                </div>
              }
          </div>
        </Container>
    </Section>
  )
}

export default IconTextBoxes


export const pageQuery = graphql`
  fragment IconTextBoxesPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_IconTextBoxes {
        fieldGroupName
        layoutIconTextBoxes {
          layoutContent {
            boxes {
              body
              heading
              
              link {
                target
                title
                url
              }
              image {
                localFile {
                  ext
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                altText
                sourceUrl
              }
            }
            heading
            bottomHeading
            bottomBody
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
            settings {
              columns
              feature
              type
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
            containerWidth
          }
        }
      }
  }
`

export const serviceQuery = graphql`
  fragment IconTextBoxesService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_IconTextBoxes {
        fieldGroupName
        layoutIconTextBoxes {
          layoutContent {
            body
            boxes {
              body
              heading
              link {
                target
                title
                url
              }
              image {
                localFile {
                  ext
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                altText
                sourceUrl
              }
            }
            heading
            bottomHeading
            bottomBody
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
            settings {
              columns
              feature
              type
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
            containerWidth
          }
        }
      }
  }
`

export const projectQuery = graphql`
  fragment IconTextBoxesProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_IconTextBoxes {
        fieldGroupName
        layoutIconTextBoxes {
          layoutContent {
            body
            boxes {
              body
              heading
              link {
                target
                title
                url
              }
              image {
                localFile {
                  ext
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                altText
                sourceUrl
              }
            }
            heading
            body
            bottomHeading
            bottomBody

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

            settings {
              columns
              feature
              type
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
            containerWidth
          }
        }
      }
  }
`

export const landerQuery = graphql`
  fragment IconTextBoxesLander on WpLander_Flexiblelayouts_Layouts {
    ... on WpLander_Flexiblelayouts_Layouts_IconTextBoxes {
        fieldGroupName
        layoutIconTextBoxes {
          layoutContent {
            body
            boxes {
              body
              heading
              link {
                target
                title
                url
              }
              image {
                localFile {
                  ext
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                altText
                sourceUrl
              }
            }
            heading
            body
            bottomHeading
            bottomBody

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

            settings {
              columns
              feature
              type
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
            containerWidth
          }
        }
      }
  }
`
