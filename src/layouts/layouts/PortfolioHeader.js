import React, { useEffect, useContext, useState } from "react"
import { Container, Section } from "../../components/global/Wrappers"
import { theme, ThemeContext } from "../../static/theme"
import { graphql } from "gatsby"
import Parser from "../../components/global/Parser"

const PortfolioHeader = (props) => {
    const content       = props.layoutData.layoutContent;
    const settings      = props.layoutData.layoutSettings;
    const context       = useContext(ThemeContext);

    const [toRender, setRendering] = useState(false);

    useEffect(() => {
      if (toRender === false) {
        handleRendering(context.filterState);
      }
    });

    useEffect(() => {
      context.updateHeaderBkgcolor('white');
      handleRendering(context.filterState);
    }, []);

    const handleRendering = (state) => {
      switch(state) {
        case "Websites":
          setRendering(content.websites);
          break;
        case "Branding":
          setRendering(content.branding);
          break;
        case "Video":
          setRendering(content.video);
          break;
        case "Interactive":
          setRendering(content.interactive);
          break;
        default:
          setRendering(content.websites);
          break;
      }
      //console.log(toRender);
      return;
    }

    useEffect(() => {
      handleRendering(context.filterState);
    }, [context.filterState]);

    return (
        <Section classes={'mb-20'} settings={settings}>
        <Container>
          {toRender && toRender.heading && 
            <h2 className={theme.text.H1_STD + 'mb-9'}>
              {toRender.heading.black &&
                <span className="text-rm-black">
                  {toRender.heading.black + " "}
                </span>
              }
              {toRender.heading.green &&
                <span className="text-rm-green">
                  {toRender.heading.green + " "}
                </span>
              }
            </h2>
          }
            {toRender && toRender.body &&
                <p dangerouslySetInnerHTML={{__html: Parser(toRender.body)}} className={`mb-9 ${theme.text.H4_LTE}`}></p>
            }
          </Container>
        </Section>
    )
}

export default PortfolioHeader;

export const query = graphql`
  fragment PortfolioHeader on WpPage {
    portfolioHeader {
        portfolioHeader {
            layoutContent {
              websites {
                heading {
                  black
                  green
                }
                body
              }
              branding {
                heading {
                  black
                  green
                }
                body
              }
              video {
                heading {
                  black
                  green
                }
                body
              }
              interactive {
                heading {
                  black
                  green
                }
                body
              }
            }
            layoutSettings {
              anchorId
              backgroundColor
              classes
              containerWidth
              id
              padding {
                bottom
                top
              }
            }
        }
    }
}
`