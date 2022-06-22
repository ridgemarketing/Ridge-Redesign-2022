import React from "react"
import { graphql } from "gatsby"

const FeaturedProjectsGrid = () => {
    return(
        <></>
    )
}

export default FeaturedProjectsGrid


// export const query = graphql`
//   fragment FeaturedProjectsGrid on WpPage_Flexiblelayouts_Layouts {
//     ... on WpPage_Flexiblelayouts_Layouts_FeaturedProjectsGrid {
//         fieldGroupName
//         layoutFeaturedProjectsGrid {
//           layoutContent {
//             heading
//           }
//           layoutSettings {
//             padding {
//               bottom
//               top
//             }
//             anchorId
//             backgroundColor
//             classes
//             id
//           }
//         }
//       }
//   }
// `