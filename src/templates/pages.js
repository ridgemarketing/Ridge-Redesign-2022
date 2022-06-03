import React from "react"
import ReactDOM from 'react-dom'
import { graphql } from "gatsby"
import { theme } from '../static/theme'
import gf_forms from '../components/gf_forms.js'
import OneLineText  from '../components/form-OneLineText.js'
import MultiLineText from '../components/form-MultiLineText.js'


let padding;
let includes  = ' base ';
let button;
let ID;

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

    ID = data.wpPage.id;

  return (
    <div className="mt-4">
      {/* <h1 class="font-bold"> {data.wpPage.title} </h1>
      <main id="rm-main" dangerouslySetInnerHTML={{__html: data.wpPage.content}}></main>
      
      <p>
      {data.wpPage.flexibleLayouts.layouts[0].layoutCenteredContent.layoutContent.body}

      {data.wpPage.flexibleLayouts.layouts[0].layoutCenteredContent.layoutContent.componentButtonGroup[0].componentButton.colors.hover}
      {data.wpPage.flexibleLayouts.layouts[0].layoutCenteredContent.layoutContent.componentButtonGroup[0].componentButton.link.url}
        
      {padding}
      
      {includes}
      </p> */}


      <h5 className={ theme.text['H5'] }>NEED MARKETING SUPPORT?</h5>
      <form className="translate-form my-5 flex flex-col w-1/2 drop-shadow-lg bg-rm-white p-11">
        <OneLineText 
            inputID     = {ID} 
            inputName   = {`Name`}
            required    = {'true'}
        />
        <OneLineText 
            inputID     = {ID + '2'}
            inputName   = {'Company Name'}
            required    = {''}
        />
        <MultiLineText
            inputID     = {ID + 3}
            inputName   = {'What are Your Marketing Goals?'}
        />
      </form>

      <h1 className={ theme.text['H1_STD'] + 'text-rm-black' }> This is Heading 1 text.</h1>
      <h2 className={ theme.text['H2'] + 'text-rm-green' }> This is Heading 2 text. </h2>
      <h3 className={ theme.text['H3'] }> This is Heading 3 text. </h3>
      <h4 className={ theme.text['H4'] }> This is Heading 4 text. </h4>
      <h5 className={ theme.text['H5'] }> This is Heading 5 text.</h5>
      <p className={ theme.text['P_STD'] }> This is P text.</p>
      <p><a href="#" className={ theme.text['LINK'] }>This is inline text link.</a></p>
      <q className={ theme.text['Q'] + 'block' }>This is Q text.</q>
      <q className={ theme.text['PULL_Q'] + 'text-rm-green'} >This is a Pull quote </q>
      <p className={ theme.text['STATS'] + 'text-rm-green mb-10'}>THIS IS A STAT</p>
      
      {button && 
        <div className="inline-block mr-10">
            <a href="#" className={ theme.text_links['BASE_STYLING'] + theme.text_links['LARGE'] + theme.text_links['FWD_BASE'] + theme.text_links['ARW_FWD_BLACK'] + 'text-rm-black' }>{button}</a>
        </div>
      }

      {button &&
        <div className="inline-block mr-10">
            <a href="#" className={ theme.text_links['BASE_STYLING'] + theme.text_links['STD'] +  theme.text_links['BACK_BASE'] + theme.text_links['ARW_BACK_GREEN'] +  'text-rm-green'}>PREVIOUS</a>
        </div>
      }
    
      {button &&
        <a href="#" className={ theme.button['BASE_STYLING'] + theme.button['PRIMARY_LIGHT'] }>{button}</a>
      }

      {/* Pre Footer Nav */}
      <div className="pre-footer-navigation w-full font-stratos block border-t border-[#c5c5c5] border-solid mt-8 mb-8">
        <div className="w-full flex justify-between mt-8 text-rm-green">
            <a href="#" className={ theme.text_links['BASE_STYLING'] + theme.text_links['STD'] + theme.text_links['BACK_BASE'] + theme.text_links['ARW_BACK_GREEN'] } >PREVIOUS PROJECT</a>
            <a href="#" className={ theme.text_links['BASE_STYLING'] + theme.text_links['STD'] + theme.text_links['FWD_BASE'] + theme.text_links['ARW_FWD_GREEN'] } >NEXT PROJECT</a>
        </div>
      </div>

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