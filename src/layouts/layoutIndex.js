import React from 'react'
import FullWidthTextImage from './page/FullWidthTextImage';

let Layouts = {};

Layouts['TwoColList'] = require('./page/TwoColList');
Layouts['FullWidthTextImage'] = FullWidthTextImage;
// Layouts['FullWidthTextImage'] = require('./page/FullWidthTextImage');

export default Layouts