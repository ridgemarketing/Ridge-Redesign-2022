import React from "react"
import { graphql } from "gatsby"
import gf_forms from '../components/gf_forms.js'

let padding;
let includes  = 'base';

const WpPage = ({ data }) =>{
  console.log(data);

    if ( data.wpPage.flexibleLayouts.layouts[0].layoutCenteredContent.layoutSettings.padding.top === 'standard' ){
        padding = '20px';
    }else { 
        padding = '10px';
    }

    for(var i =0; data.wpPage.flexibleLayouts.layouts.length > i; i++){ 
        if( data.wpPage.flexibleLayouts.layouts[i].fieldGroupName === 'Page_Flexiblelayouts_Layouts_CenteredContent'){
            includes = includes + [i] + 'included';
        }else{ 
            includes = includes + [i] + 'nope';
        }
    }

  return (
    <div>
      <h1 class="font-bold"> {data.wpPage.title} </h1>
      <div dangerouslySetInnerHTML={{__html: data.wpPage.content}}></div>
      {
      //data.wpPage.quickGatsbyTestField.basicTextInput
      data.wpPage.flexibleLayouts.layouts[0].layoutCenteredContent.layoutContent.body}

      {data.wpPage.flexibleLayouts.layouts[0].layoutCenteredContent.layoutContent.componentButtonGroup[0].componentButton.colors.hover}
      {data.wpPage.flexibleLayouts.layouts[0].layoutCenteredContent.layoutContent.componentButtonGroup[0].componentButton.link.url}
        
      {padding}
      {includes}

    </div>
  )
}
export default WpPage;

export const query = graphql`
  query PageById( $id: String ){
    wpPage( id: {eq: $id} ){
            id
            uri
            title
            content
            flexibleLayouts {
            fieldGroupName
            layouts {
                ... on WpPage_Flexiblelayouts_Layouts_CenteredContent {
                fieldGroupName
                layoutCenteredContent {
                    fieldGroupName
                    layoutContent {
                    body
                    componentButtonGroup {
                        componentButton {
                        colors {
                            fieldGroupName
                            hover
                        }
                        icon
                        link {
                            target
                            title
                            url
                        }
                        style
                        }
                    }
                    }
                    layoutSettings {
                    anchorId
                    backgroundColor
                    padding {
                        bottom
                        top
                        fieldGroupName
                    }
                    id
                    fieldGroupName
                    classes
                    }
                }
                }
                ... on WpPage_Flexiblelayouts_Layouts_CenteredTextWIcons {
                fieldGroupName
                }
                ... on WpPage_Flexiblelayouts_Layouts_LayoutCards {
                    fieldGroupName
                    layoutCards {
                      layoutContent { 
                        cards {
                          heading
                          fieldGroupName
                        }
                        heading
                      }
                    }
                  }
            } 
        }
    }
  }
`