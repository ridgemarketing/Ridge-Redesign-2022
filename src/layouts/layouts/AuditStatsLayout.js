import React from "react"
import { graphql } from "gatsby"
import AuditStats from "./auditLander/AuditStats"

const AuditStatsLayout = (props) => {
    const content = props.layoutData.layoutContent

    return <AuditStats data={content} cmo={true} pb={true} />
}

export default AuditStatsLayout

export const pageQuery = graphql`
  fragment AuditStatsLayoutPage on WpPage_Flexiblelayouts_Layouts {
    ... on WpPage_Flexiblelayouts_Layouts_AuditStats {
      fieldGroupName
      layoutAuditStats {
        layoutContent {
          heading
          body
          subBody
          stats {
            stat
            heading
            subHeading
          }
        }
        layoutSettings {
          padding { bottom top }
          anchorId
          backgroundColor
          classes
          id
        }
      }
    }
  }
`

export const serviceQuery = graphql`
  fragment AuditStatsLayoutService on WpService_Flexiblelayouts_Layouts {
    ... on WpService_Flexiblelayouts_Layouts_AuditStats {
      fieldGroupName
      layoutAuditStats {
        layoutContent {
          heading
          body
          subBody
          stats {
            stat
            heading
            subHeading
          }
        }
        layoutSettings {
          padding { bottom top }
          anchorId
          backgroundColor
          classes
          id
        }
      }
    }
  }
`

export const projectQuery = graphql`
  fragment AuditStatsLayoutProject on WpProject_Flexiblelayouts_Layouts {
    ... on WpProject_Flexiblelayouts_Layouts_AuditStats {
      fieldGroupName
      layoutAuditStats {
        layoutContent {
          heading
          body
          subBody
          stats {
            stat
            heading
            subHeading
          }
        }
        layoutSettings {
          padding { bottom top }
          anchorId
          backgroundColor
          classes
          id
        }
      }
    }
  }
`

export const landerQuery = graphql`
  fragment AuditStatsLayoutLander on WpLander_Flexiblelayouts_Layouts {
    ... on WpLander_Flexiblelayouts_Layouts_AuditStats {
      fieldGroupName
      layoutAuditStats {
        layoutContent {
          heading
          body
          subBody
          stats {
            stat
            heading
            subHeading
          }
        }
        layoutSettings {
          padding { bottom top }
          anchorId
          backgroundColor
          classes
          id
        }
      }
    }
  }
`
