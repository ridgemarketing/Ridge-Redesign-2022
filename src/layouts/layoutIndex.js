import React from 'react'
import FullWidthTextImage from './page/_FullWidthTextImage';
// import ThreeColumnTextBlock from './page/ThreeColumnTextBlocks'
import ContactFourSquare from "./page/ContactFourSquare"
import FeaturedProjectsCarousel from "./page/FeaturedProjectsCarousel"
import FeaturedProjectsGrid from "./page/FeaturedProjectsGrid"
import FullWidthImage from "./page/FullWidthImage"
import FullWidthImageText from "./page/FullWidthImageText"
import HomeHero from "./page/HomeHero"
import IconTextBoxes from "./page/IconTextBoxes"
import LogoCloud from "./page/LogoCloud"
import Quotes from "./page/Quotes"
import PostCards from "./page/PostCards"
import Results from "./page/Results"
import ResultsMixed from "./page/ResultsMixed"
import TextBlock from "./page/TextBlock"
// import ThreeColIconsText from "./page/_ThreeColIconsText"
import ThreeColProjectBlocks from "./page/ThreeColProjectBlocks"
import TwoColBreakoutImageText from "./page/TwoColBreakoutImageText"
import TwoColBreakoutImageHeading from "./page/TwoColBreakoutImageHeading"
// import TwoColIconsText from "./page/TwoColIconsText"
import TwoColImageText from "./page/TwoColImageText"
import TwoColList from "./page/TwoColList"
import TwoColTextQuote from "./page/TwoColTextQuote"
import VennDiagram from "./page/VennDiagram"
import VerticalSlider from "./page/VerticalSlider"
import CtaForm from "./page/CtaForm"
import LineBreak from "./page/LineBreak"

let Layouts = {}; 

Layouts['ContactFourSquare']                = ContactFourSquare;
Layouts['FeaturedProjectsCarousel']         = FeaturedProjectsCarousel;
Layouts['FeaturedProjectsGrid']             = FeaturedProjectsGrid;
Layouts['FullWidthImage']                   = FullWidthImage;
Layouts['FullWidthImageText']               = FullWidthImageText;
// Layouts['ThreeColumnTextBlock']          = ThreeColumnTextBlock;
Layouts['TextBlock']                        = TextBlock;
Layouts['HomeHero']                         = HomeHero;
Layouts['IconTextBoxes']                    = IconTextBoxes;
// Layouts['InPageContactForm']             = InPageContactForm;
Layouts['LogoCloud']                        = LogoCloud;
Layouts['VerticalSlider']                   = VerticalSlider;
Layouts['Quotes']                           = Quotes;
Layouts['PostCards']                        = PostCards;
Layouts['Results']                          = Results;
Layouts['ResultsMix']                       = ResultsMixed; //component name is different in backend, causing this change to be necessary to match up
Layouts['TextBlock']                        = TextBlock;
// Layouts['ThreeColIconsText']             = ThreeColIconsText;
Layouts['ThreeColProjectBlocks']            = ThreeColProjectBlocks;
Layouts['TwoColBreakoutImageText']          = TwoColBreakoutImageText;
Layouts['TwoColBreakoutImageHeading']       = TwoColBreakoutImageHeading;
// Layouts['TwoColIconsText']               = TwoColIconsText;
Layouts['TwoColImageText']                  = TwoColImageText;
Layouts['TwoColList']                       = TwoColList;
Layouts['TwoColTextQuote']                  = TwoColTextQuote;
Layouts['VennDiagram']                      = VennDiagram;
Layouts['CtaForm']                          = CtaForm;
Layouts['LineBreak']                        = LineBreak;

export default Layouts