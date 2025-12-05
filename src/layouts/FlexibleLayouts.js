import { graphql } from 'gatsby'
import React from 'react'
import Layouts from './layoutIndex';

const FlexibleLayouts = (props) => {

  let flexLayouts     = props.flexibleLayouts.layouts;
  const layoutsArray  = [];

  flexLayouts && flexLayouts.map((res, index) => {
      if (Object.keys(res).length > 0) {
        let subString       = res.fieldGroupName.split('_').pop();
        let layoutArrTitle  = `layout${subString}`;

        let layoutProps;
        
        if (Layouts[subString]) {
            layoutProps = {
                layoutContent   : res[layoutArrTitle].layoutContent || {},
                layoutSettings  : res[layoutArrTitle].layoutSettings  || {},
                location        : props.location
            }
        }
        
        const LayoutToRender = Layouts[subString]
        return(layoutsArray.push(<LayoutToRender key={layoutArrTitle + '_' + index} layoutData={layoutProps} />));
    } else {
      return (<></>)
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
        ...FlexibleProjectBlocksPage
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
        ...ResultsImagePage
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
        ...FeaturedProjectsGridPageDev
        ...ButtonRowPage
        ...BrandingCardsPage
        ...CtaFooterPpcPage
        ...ImageCarouselPage
        ...PullquoteImagePage
        ...TwoColTextFormPage
        ...TwoColIconTextPage
        ...TwoColIconTextPage
        ...FrequentlyAskedQuestionsPage
        ...TwoColImageListPage
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
        ...FlexibleProjectBlocksService
        ...ProjectBlocksService
        ...TextBlockService
        ...VideoPlayerService
        ...FullWidthImageService
        ...FullWidthImageTextService
        ...FullWidthImageVideoTextService
        ...IconTextBoxesService
        ...VerticalSliderService
        ...MediaBlocksService
        ...FeaturedProjectsCarouselService 
        ...QuotesService
        ...ResultsService
        ...ResultsImageService
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
        ...BrandingCardsService
        ...CtaFooterPpcService
        ...ImageCarouselService
        ...PullquoteImageService
        ...TwoColTextFormService
        ...TwoColIconTextService
        ...FrequentlyAskedQuestionsService
        ...TwoColImageListService
      }
    }
  }
`
//         ...ImagesTopAlignedTextProject
export const projectQuery = graphql`
  fragment FlexibleLayoutsProject on WpProject {
    flexibleLayouts {
      layouts {
        ...TwoColImageTextProject
        ...TwoColBreakoutImageTextProject
        ...TwoColBreakoutImageHeadingProject
        ...TwoColTextQuoteProject
        ...FlexibleProjectBlocksProject
        ...ProjectBlocksProject
        ...VideoPlayerProject
        ...ImagesTopAlignedTextProject
        ...FullWidthImageProject
        ...IconTextBoxesProject
        ...MediaBlocksProject
        ...QuotesProject
        ...ResultsProject
        ...ResultsImageProject
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
        ...BrandingCardsProject
        ...CtaFooterPpcProject
        ...ImageCarouselProject
        ...PullquoteImageProject
        ...TwoColTextFormProject
        ...TwoColIconTextProject
        ...FrequentlyAskedQuestionsProject
        ...TwoColImageListProject
      }
    }
  }
`

export const landerQuery = graphql`
  fragment FlexibleLayoutsLander on WpLander {
    flexibleLayouts {
      layouts {
        ...IconTextBoxesLander
        ...ResultsLander
        ...QuotesLander
        ...LogoCloudLander
        ...CtaFooterPpcLander
        ...ImageCarouselLander
        ...PullquoteImageLander
        ...TwoColTextFormLander
        ...VerticalSliderLander
        ...FrequentlyAskedQuestionsLander
      }
    }
  }
`