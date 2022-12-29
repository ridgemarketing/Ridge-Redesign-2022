import { graphql } from 'gatsby'
import React from 'react'
import Layouts from './layoutIndex';

const FlexibleLayouts = (props) => {

  let layouts = props.flexibleLayouts.layouts;
  const layoutsArray = [];

  layouts && layouts.map((res) => {
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
        return(layoutsArray.push(<LayoutToRender layoutData={layoutProps} />));
    } else {
      return false
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
        ...ProjectBlocksPage
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
        ...TeamGridPage
        ...ResultsTextBlockPage
        ...CareersFormPage
        ...TextVideoOverhangPage
        ...FeaturedProjectsGridPage
        ...ButtonRowPage
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
        ...ProjectBlocksService
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
        ...TeamGridService
        ...ResultsTextBlockService
        ...TextVideoOverhangService
        ...FeaturedProjectsGridService
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
        ...ProjectBlocksProject
        ...VideoPlayerProject
        ...FullWidthImageProject
        ...FullWidthImageTextProject
        ...IconTextBoxesProject
        ...MediaBlocksProject
        ...QuotesProject
        ...ResultsProject
        ...ResultsMixProject
        ...LogoCloudProject
        ...PostCardsProject
        ...ProjectPortfolioProject
        ...TextBlockProject
        ...VideoPlayerProject
        ...FullWidthImageProject
        ...FullWidthImageTextProject
        ...IconTextBoxesProject
        ...MediaBlocksProject
        ...QuotesProject
        ...ResultsProject
        ...ResultsMixProject
        ...LogoCloudProject
        ...PostCardsProject
        ...ProjectPortfolioProject 
        ...LineBreakProject
        ...TeamGridProject
        ...ResultsTextBlockProject
        ...TextVideoOverhangProject
        ...FeaturedProjectsGridProject
      }
    }
  }
`