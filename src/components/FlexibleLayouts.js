import { graphql } from 'gatsby'
import React from 'react'
import Layouts from '../layouts/layoutIndex';

const FlexibleLayouts = (props) => {

  let layouts = props.flexibleLayouts.layouts;
  const layoutsArray = [];

  layouts.map((res) => {
      if (Object.keys(res).length > 0) {
        let subString = res.fieldGroupName.split('_').pop();
        let layoutArrTitle = `layout${subString}`;

        let layoutProps;
        if (Layouts[subString]) {
            layoutProps = {
                layoutContent: res[layoutArrTitle].layoutContent || {},
                layoutSettings: res[layoutArrTitle].layoutSettings  || {}
            }
        }
        
        const LayoutToRender = Layouts[subString]
        layoutsArray.push(<LayoutToRender layoutData={layoutProps} />);
    }
  });
  return (
    <div>
      <h1>FLEX LAYOUTS</h1>
      {layoutsArray}

      {layouts && 
        <h1>there are layouts</h1>
      }

    </div>
  )
}

export default FlexibleLayouts



export const query = graphql`
  fragment FlexibleLayouts on WpPage {
    flexibleLayouts{
      layouts {
        ...TwoColImageText 
        ...TwoColBreakoutImageText 
        ...TwoColBreakoutImageHeading 
        ...TwoColTextQuote 
        ...TwoColProjectsGrid 
        ...ThreeColProjectBlocks 
        ...TextBlock 
        ...VideoPlayer 
        ...FullWidthImage 
        ...FullWidthImageText
        ...IconTextBoxes 
        ...VerticalSlider
        ...MediaBlocks 
        ...FeaturedProjectsCarousel 
        ...Quotes 
        ...Results 
        ...ResultsMix 
        ...LogoCloud 
        ...PostCards 
        ...CtaForm
        ...ProjectPortfolio 
      }
    }
  }
`


