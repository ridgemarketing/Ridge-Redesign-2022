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
        layoutsArray.push(<LayoutToRender layoutData={layoutProps} title={title} uri={uri} test={`some testing`} />);
    }
  });
  return (
    <div>
      {layoutsArray}

    </div>
  )
}

export default FlexibleLayouts
