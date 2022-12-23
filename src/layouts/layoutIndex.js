//import FullWidthTextImage from './layouts/_FullWidthTextImage';
// import ThreeColumnTextBlock from './layouts/ThreeColumnTextBlocks'
import ContactFourSquare from "./layouts/ContactFourSquare"
import FeaturedProjectsCarousel from "./layouts/FeaturedProjectsCarousel"
import FeaturedProjectsGrid from "./layouts/FeaturedProjectsGrid"
import FullWidthImage from "./layouts/FullWidthImage"
import FullWidthImageText from "./layouts/FullWidthImageText"
import HomeHero from "./layouts/HomeHero"
import IconTextBoxes from "./layouts/IconTextBoxes"
import LogoCloud from "./layouts/LogoCloud"
import Quotes from "./layouts/Quotes"
import PostCards from "./layouts/PostCards"
import Results from "./layouts/Results"
import ResultsMixed from "./layouts/ResultsMixed"
import TextBlock from "./layouts/TextBlock"
// import ThreeColIconsText from "./layouts/_ThreeColIconsText"
//import ProjectBlocks from "./layouts/ProjectBlocks"
import TwoColBreakoutImageText from "./layouts/TwoColBreakoutImageText"
import TwoColBreakoutImageHeading from "./layouts/TwoColBreakoutImageHeading"
// import TwoColIconsText from "./layouts/TwoColIconsText"
import TwoColImageText from "./layouts/TwoColImageText"
import TwoColList from "./layouts/TwoColList"
import TwoColTextQuote from "./layouts/TwoColTextQuote"
import VennDiagram from "./layouts/VennDiagram"
import VerticalSlider from "./layouts/VerticalSlider"
import QuarterImageText from "./layouts/QuarterImageText"
import CtaForm from "./layouts/CtaForm"
import LineBreak from "./layouts/LineBreak"
import ProjectPortfolio from "./layouts/ProjectPortfolio"
import VideoPlayer from "./layouts/VideoPlayer"
import MediaBlocks from "./layouts/MediaBlocks"
import TeamGrid from "./layouts/TeamGrid"
import ResultsTextBlock from "./layouts/ResultsTextBlock"
import CareersForm from "./layouts/CareersForm"
import TextVideoOverhang from "./layouts/TextVideoOverhang"
import ButtonRow from "./layouts/ButtonRow" 
// import FeaturedProjectsGrid from "./layouts/FeaturedProjectsGrid"


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
//Layouts['ProjectBlocks']                    = ProjectBlocks;
Layouts['TwoColBreakoutImageText']          = TwoColBreakoutImageText;
Layouts['TwoColBreakoutImageHeading']       = TwoColBreakoutImageHeading;
// Layouts['TwoColIconsText']               = TwoColIconsText;
Layouts['TwoColImageText']                  = TwoColImageText;
Layouts['TwoColList']                       = TwoColList;
Layouts['TwoColTextQuote']                  = TwoColTextQuote;
Layouts['VennDiagram']                      = VennDiagram;
Layouts['QuarterImageText']                 = QuarterImageText;
Layouts['CtaForm']                          = CtaForm;
Layouts['CareersForm']                      = CareersForm;
Layouts['LineBreak']                        = LineBreak;
Layouts['ProjectPortfolio']                 = ProjectPortfolio;
Layouts['VideoPlayer']                      = VideoPlayer;
Layouts['MediaBlocks']                      = MediaBlocks;
Layouts['TeamGrid']                         = TeamGrid;
Layouts['ResultsTextBlock']                 = ResultsTextBlock;
Layouts['TextVideoOverhang']                = TextVideoOverhang;
Layouts['FeaturedProjectsGrid']             = FeaturedProjectsGrid;
Layouts['ButtonRow']                        = ButtonRow;


export default Layouts