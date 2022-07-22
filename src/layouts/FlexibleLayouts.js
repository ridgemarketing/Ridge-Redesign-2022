import { graphql } from 'gatsby'
import React from 'react'
import Layouts from './layoutIndex';

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
      {layoutsArray}
    </div>
  )
}

export default FlexibleLayouts



export const pageQuery = graphql`
  fragment FlexibleLayoutsPage on WpPage {
    flexibleLayouts {
      layouts {
        ...TwoColImageTextPage
        ...TwoColBreakoutImageTextPage
        ...TwoColBreakoutImageHeadingPage
        ...TwoColTextQuotePage
        ...TwoColProjectsGridPage
        ...ThreeColProjectBlocksPage
        ...TextBlockPage
        ...VideoPlayerPage
        ...FullWidthImagePage
        ...FullWidthImageTextPage
        ...IconTextBoxesPage
        ...VerticalSliderPage
        ...MediaBlocksPage
        ...FeaturedProjectsCarouselPage
        ...QuotesPage
        ...ResultsPage
        ...ResultsMixPage
        ...LogoCloudPage
        ...PostCardsPage
        ...ProjectPortfolioPage
        ...LineBreakPage
        ...ContactFourSquare
        ...QuarterImageTextPage
      }
    }
  }
`
export const serviceQuery = graphql`
  fragment FlexibleLayoutsService on WpService {
    flexibleLayouts {
      layouts {
        ...TwoColImageTextService
        ...TwoColBreakoutImageTextService
        ...TwoColBreakoutImageHeadingService 
        ...TwoColTextQuoteService
        ...TwoColProjectsGridService
        ...ThreeColProjectBlocksService
        ...TextBlockService
        ...VideoPlayerService
        ...FullWidthImageService
        ...FullWidthImageTextService
        ...IconTextBoxesService
        ...VerticalSliderService
        ...MediaBlocksService
        ...FeaturedProjectsCarouselService 
        ...QuotesService
        ...ResultsService
        ...ResultsMixService
        ...LogoCloudService
        ...PostCardsService
        ...ProjectPortfolioService 
        ...CTAFormService
        ...LineBreakService
      }
    }
  }
`

export const projectQuery = graphql`
  fragment FlexibleLayoutsProject on WpProject {
    flexibleLayouts {
      layouts {
        ...TwoColImageTextProject
        ...TwoColBreakoutImageTextProject
        ...TwoColBreakoutImageHeadingProject
        ...TwoColTextQuoteProject
        ...TwoColProjectsGridProject
        ...ThreeColProjectBlocksProject
        ...TextBlockProject
        ...VideoPlayerProject
        ...FullWidthImageProject
        ...FullWidthImageTextProject
        ...IconTextBoxesProject
        ...VerticalSliderProject
        ...MediaBlocksProject
        ...FeaturedProjectsCarouselProject
        ...QuotesProject
        ...ResultsProject
        ...ResultsMixProject
        ...LogoCloudProject
        ...PostCardsProject
        ...ProjectPortfolioProject 
        ...LineBreakProject
      }
    }
  }
`

