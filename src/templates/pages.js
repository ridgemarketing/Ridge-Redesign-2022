import React from "react"
import ReactDOM from 'react-dom'
import { graphql } from "gatsby"
import gf_forms from '../components/gf_forms.js'

let padding;
let includes  = ' base ';
let button;

const WpPage = ({ data }) =>{
  console.log(data);

    //test for acf settings in layouts 
    if ( data.wpPage.flexibleLayouts.layouts[0].layoutCenteredContent.layoutSettings.padding.top === 'standard' ){
        padding = '20px';
    }else { 
        padding = '10px';
    }

    //basic layout composer loop 
    for(var i =0; data.wpPage.flexibleLayouts.layouts.length > i; i++){ 
        if( data.wpPage.flexibleLayouts.layouts[i].fieldGroupName === 'Page_Flexiblelayouts_Layouts_CenteredContent'){
            includes = includes + [i] + ' included ';

            button = data.wpPage.flexibleLayouts.layouts[i].layoutCenteredContent.layoutContent.componentButtonGroup[0].componentButton.link.title;
        }else{ 
            includes = includes + [i] + ' nope ';
        }
    }

  return (
    <div>
      <h1 class="font-bold"> {data.wpPage.title} </h1>
      <main id="rm-main" dangerouslySetInnerHTML={{__html: data.wpPage.content}}></main>
      
      <p>
      {data.wpPage.flexibleLayouts.layouts[0].layoutCenteredContent.layoutContent.body}

      {data.wpPage.flexibleLayouts.layouts[0].layoutCenteredContent.layoutContent.componentButtonGroup[0].componentButton.colors.hover}
      {data.wpPage.flexibleLayouts.layouts[0].layoutCenteredContent.layoutContent.componentButtonGroup[0].componentButton.link.url}
        
      {padding}
      
      {includes}
      </p>

      { (() => {
                if ( button ) {
                    return (
                       <a href="#" class="buttons button-primary">{button}</a>
                    )
                } else { return }
            }
        )
      () 
      }

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