import { graphql } from 'gatsby'
import React from 'react'
import Layouts from '../layouts/layoutIndex';

const getFlex = ({ data }) => {

  let title = data.wpPage.title;
  let uri = data.wpPage.uri;
  let layouts = data.wpPage.flexibleLayouts.layouts;
  const layoutsArray = [];

  console.log(layouts)
  layouts.map((res) => {
      if (Object.keys(res).length > 0) {
        let subString = res.fieldGroupName.split('_').pop();
        let layoutArrTitle = `layout${subString}`;

        let layoutProps;
        if (Layouts[subString]) {
            layoutProps = {
                layoutContent: res[layoutArrTitle].layoutContent,
                layoutSettings: res[layoutArrTitle].layoutSettings
            }
        }
        
        const LayoutToRender = Layouts[subString]
        layoutsArray.push(<LayoutToRender layoutData={layoutProps} title={title} uri={uri} test={`some testing`} />);
    }
  });
  return (
    <div>
      {layoutsArray}
    </div>
  )
}

export default getFlex

export const query = graphql`
  query FlexLayoutById( $id: String ){
    wpPage( id: {eq: $id} ){
      id
      uri
      title
      content
      flexibleLayouts {
        layouts {
          ... on WpPage_Flexiblelayouts_Layouts_FullWidthTextImage {
            fieldGroupName
            layoutFullWidthTextImage {
              layoutContent {
                body
                componentButtonGroup {
                  componentButton {
                    colors {
                      fieldGroupName
                      hover
                      resting
                    }
                    icon
                    link {
                      target
                      title
                      url
                    }
                    style
                  }
                }
              }
              layoutSettings {
                anchorId
                backgroundColor
                classes
                id
                padding {
                  bottom
                  top
                }
              }
            }
          }
        }
      }
    }
  }
` 