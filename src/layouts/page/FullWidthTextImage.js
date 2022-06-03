import React from 'react'

const FullWidthTextImage = (props) => {
    const info = {
        "FullWidthTextImage": {
            content: props.layoutData.layoutContent,
            settings: props.layoutData.layoutSettings
        }
    }
    console.log(info)
    return (
        <h1>Full Width Text Image</h1>
    )
}

export default FullWidthTextImage