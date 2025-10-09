import React from "react"
import VerticalSliderDefault from "../../components/VerticalSliderDefault"
import VerticalSliderStyleToggle from "../../components/VerticalSliderStyleToggle"

const VerticalSlider = (props) => {
  const content = props.layoutData.layoutContent

  if (content.styleToggle) {
    return <VerticalSliderStyleToggle {...props} />
  } else {
    return <VerticalSliderDefault {...props} />
  }
}

export default VerticalSlider
