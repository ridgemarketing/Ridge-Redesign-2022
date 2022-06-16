import React from 'react'
import FullWidthTextImage from './page/FullWidthTextImage';
import TwoColList from './page/TwoColList';
import TwoColImageText from './page/TwoColImageText';
import FullWidthImage from './page/FullWidthImage'
import FullWidthImageText from './page/FullWidthImageText'
// import ThreeColumnTextBlock from './page/ThreeColumnTextBlocks'
import TextBlock from './page/TextBlock'
import HomeHero from './page/HomeHero'

let Layouts = {};

Layouts['TwoColList'] = TwoColList;
Layouts['FullWidthTextImage'] = FullWidthTextImage;
Layouts['TwoColImageText'] = TwoColImageText;
Layouts['FullWidthImage'] = FullWidthImage;
Layouts['FullWidthImageText'] = FullWidthImageText;
// Layouts['ThreeColumnTextBlock'] = ThreeColumnTextBlock;
Layouts['TextBlock'] = TextBlock;
Layouts['HomeHero'] = HomeHero;

export default Layouts