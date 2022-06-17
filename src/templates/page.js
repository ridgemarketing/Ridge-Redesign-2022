import React, { useRef, useEffect, useState } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby"
import { theme } from '../static/theme.js'

import { venn } from 'venny'
//import { extractSets, generateCombinations, VennDiagram } from '@upsetjs/react';

const WpPage = ({ data }) =>{

  const [vslide, setVslide]   = useState(0);
  const firstSlide            = useRef(null);
  const otherSlides           = useRef([]);
  const progressBar           = useRef([]);
  const outerContainer        = useRef(null);
  let slideHeight             = 550;
  let totalHeight             = 0;
  let scrollPoints            = [];
  //let sCounter                = 0;

  const vslides = [
    {
      number:0,
      heading:'RESPONSIVE WEBSITE DESIGN',
      p:'(Adapts to Mobile and Desktop)',
      img: `https://assets.justinmind.com/wp-content/uploads/2020/08/mockup-templates-to-download-now-768x492.png`
    },
    {
      number:1,
      heading:'Intuitive UX and Navigation',
      p:` `,
      img: `https://img.freepik.com/free-psd/mobile-phone-mockup-with-editable-design-changeable-colors_196070-196.jpg?w=2000`
    },
    {
      number:2,
      heading: `third heading`,
      p:` `,
      img: ``
    },
    {
      number:3,
      heading:'Intuitive UX ',
      p:` `,
      img: `https://img.freepik.com/free-psd/mobile-phone-mockup-with-editable-design-changeable-colors_196070-196.jpg?w=2000`
    },
  ]

  for (let i = 0; vslides.length > i; i++){
    scrollPoints.push(totalHeight);
    totalHeight = totalHeight + slideHeight;
  }
   
  let current = 0;
  let observer = new IntersectionObserver( (entries) =>{
      entries.forEach ( entry => {
        console.log(entry.isIntersecting);
          if( entry.isIntersecting ){

              onscroll = () => {
                for( let i = 0; scrollPoints.length > i; i++ ){
                  if ( firstSlide.current.offsetTop > scrollPoints[i] ){
                    //console.log('greater than', scrollPoints[i], i);
                    console.log(firstSlide.current.offsetTop, scrollPoints[i] + slideHeight);
                    setVslide(i);
                    current = i;

                    progressBar.current[i].style.height = 200 / ( vslides.length  + 1 ) + '%';
                    progressBar.current[i].style.backgroundColor = '#FFFFFF';
                    progressBar.current[i].children[0].style.backgroundColor = '#A9CF38';
                    progressBar.current[i].children[0].style.height = ( ( firstSlide.current.offsetTop - scrollPoints[i] ) / slideHeight ) * 100 + '%';
                  }
                }
                for( let z = 0; scrollPoints.length > z; z++){
                  if( z == current ){}else{
                    progressBar.current[z].style.height = 100 / ( vslides.length  + 1 ) + '%';
                    progressBar.current[z].children[0].style.backgroundColor = '#FFFFFF';
                    progressBar.current[z].style.backgroundColor = '#FFFFFF';
                  }
                }
              }

          }else{
             return
          }
        }) },
    {
      root: null,
      rootMargin: '0px 0px -' + slideHeight + 'px 0px',
      //rootMargin: '0px',
      threshold: 0
    });

  // let scrollDirection = 0;
  // let observer = new IntersectionObserver( (entries, options) => {
  //     entries.forEach ( entry => {

  //       if( entry.isIntersecting ){
  //         sCounter = sCounter + 1;

  //           if(sCounter === vslides.length ){
  //             sCounter = sCounter - 1;
  //           }else{
  //             setVslide( sCounter ); 

  //             for(let i =0; sCounter >= i; i++){
  //               progressBar.current[i].style.height = 100 / ( vslides.length  + 1 ) + '%';
  //               progressBar.current[i].children[0].style.backgroundColor = '#FFFFFF';
  //             }
  //             progressBar.current[sCounter].children[0].style.backgroundColor = '#A9CF38';
  //             progressBar.current[sCounter].style.height = ( 200 / ( vslides.length  + 1 ) ) + '%';
  //           }
  //         return

  //       }
  //       if (entry.boundingClientRect.top > 0) {
  //         if(sCounter === 0 ){
  //           progressBar.current[0].children[0].style.height = '100%';
  //           progressBar.current[0].children[0].style.backgroundColor = '#A9CF38';
  //           progressBar.current[0].style.height = (100 / ( vslides.length  + 1 )) *2 + '%';

  //         }else{

  //           for(let i =0; sCounter >= i; i++){
  //             progressBar.current[i].style.height = 100 / ( vslides.length  + 1 ) + '%';
  //             progressBar.current[i].children[0].style.backgroundColor = '#FFFFFF';
  //           }

  //           sCounter = sCounter - 1;
  //           setVslide( sCounter );

  //           progressBar.current[sCounter].children[0].style.backgroundColor = '#A9CF38';
  //           progressBar.current[sCounter].style.height = ( 200 / ( vslides.length  + 1 ) ) + '%';
  //         }
  //       } 
  //     });
  // }, 
  // {
  //   root: null,
  //  //rootMargin: '0px 0px -' + slideHeight + 'px 0px',
  //   rootMargin: '0px',
  //   threshold: 0
  // });

  useEffect(() => {
  
      // for(let i =0; otherSlides.current.length > i; i++){
      //   observer.observe( otherSlides.current[i] );
      // } 
      observer.observe(outerContainer.current);

      window.addEventListener('load', function(){
       
        //shadow container 
        if( document.getElementById('shadow-container') ){
          let shadowRoot_ =  document.getElementById('shadow-container').shadowRoot;
          let allSVG =  shadowRoot_.querySelector('svg').querySelectorAll('g');
          let allText = shadowRoot_.querySelectorAll('label');  

          for(let i =0; allSVG.length > i; i++){
              allSVG[i].style.fillOpacity = '1';
              allSVG[i].style.opacity = '1';
            }

          for (let i =0; allText.length > i; i++){
            allText[i].style.lineHeight = '2.7rem';

            if(i % 2 === 0){
              allText[i].style.marginLeft   = '20px';
            }else{
              allText[i].style.marginRight = '20px';
              allText[i].style.textAlign   = 'right';
            }

          }  
 
        }

        //three col icon text height
        if ( document.getElementsByClassName('threeColIconsText').length > 0 ){
            const allimg  = document.getElementsByClassName('threeColIconsText')[0].getElementsByTagName('img');
            const allText = document.getElementsByClassName('threeColIconsText')[0].getElementsByClassName('icon-block-title');

            let heights = [];
            let currentHeight;

            for ( let i = 0; allText.length > i; i++ ){
              heights.push(allText[i].clientHeight);
            }

            for ( let i = 0; heights.length > i; i++ ){
              currentHeight = heights[i];
                for ( let z = 0; allText.length > z; z++ ){
                  if(allText[z].clientHeight < currentHeight){
                    allText[z].style.height = currentHeight + 'px';
                  }
                }
            }

            for ( let i = 0; allText.length > i; i++ ){
                if( allText[i].clientHeight > allimg[i].clientHeight ){
                    allimg[i].style.marginTop = ( allText[i].clientHeight - allimg[i].clientHeight )/2 + 'px' ;
                }
                if( allText[i].clientHeight < allimg[i].clientHeight){
                    allText[i].parentNode.style.height = allimg[i].clientHeight + 'px';
                }
            }
        }

      })
  }, []);


    const [slide, setSlide] = useState(0);
    const nextSlide = () => {
        let i = slide
        if (i === slides.length - 1) {
            setSlide(0)
        } else {
            setSlide(i + 1)
        }
    }

    const prevSlide = () => {
        let i = slide
        if (i === 0) { 
            setSlide(slides.length - 1)
        } else {
            setSlide(i - 1)
        }
    }
    const slides = [
      {
          heading: "We’re very pleased with the quality of work that Ridge Marketing provided in redesigning our website. They’ve exceeded our expectations and provided a dramatically improved user experience for our customers.",
          class:  'first-slide'
      },
      {
          heading: "Slide 2",
          class:  'second-slide'
      },
      {
          heading: "Slide 3",
          class:  'third-slide'
      }
    ];

      let animationClass = `.`+ slides[slide].class + ` {          
        animation-timing-function: ease-out;
        animation-duration: .75s;
        animation-name: ` + slides[slide].class + ` ;
       }`;

      let animationKeyframes =`
        @keyframes ` +  slides[slide].class + ` {
            0%      { 
                opacity: 0;
                transform: translateX(-25px);
            }
            25%{
                opacity: 0;
            }
            100%      { 
                opacity: 1;
                transform: translateX(0px);
            }
        }`;


  return (
    <>

    <div className="pt-12 bg-rm-black h-[750px] w-full">
      <div className="container">
        <venn-diagram id="shadow-container" class="block w-min ml-auto mr-auto drop-shadow-lg" width="1000" height="585">
          <venn-set name="A" label="AWARD-WINNING DOERS, WRITERS, DESIGNERS & DEVELOPERS "></venn-set>
          <venn-set name="B" label="STRATEGIC THINKERS WHO GET MEASURABLE RESULTS"></venn-set>
          <venn-n part="intersection" sets="A B" label=""></venn-n>
        </venn-diagram>
        {/* <svg width="813" height="813" viewBox="0 0 813 813" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="813" height="813" fill=""/>
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="59" y="47" width="719" height="719">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M59.0015 47.0003H778V766H59.0015V47.0003Z" fill="white"/>
            </mask>
            <g mask="url(#mask0)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M778.001 406.5C778.001 605.047 617.045 766 418.501 766C219.955 766 59.0015 605.047 59.0015 406.5C59.0015 207.954 219.955 47.0003 418.501 47.0003C617.045 47.0003 778.001 207.954 778.001 406.5Z" fill="black"/>
            </g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M349 310.97H405.435V348.033H406.058C409.142 320.979 429.496 308 458.481 308H480.997C509.059 308 528.183 322.459 539.28 352.109C549.149 318.009 561.793 308 595.409 308H613.603C667.571 308 687 339.508 687 393.626V500H627.792V398.443C627.792 372.494 622.241 363.598 587.702 363.598C559.329 363.598 547.607 371.013 547.607 395.845V500H488.396V392.881C488.396 369.532 481.303 363.598 445.531 363.598C420.244 363.598 408.214 371.013 408.214 400.296V500H349V310.97Z" fill="#A9CF38"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M148 310.97H203.533V346.919H204.15C210.937 316.898 235.001 308 261.839 308C305.034 308 322 330.24 322 382.503C322 387.325 321.694 392.509 321.38 399.182H270.172C270.172 375.094 265.544 363.604 241.789 363.604C221.429 363.604 207.235 372.866 207.235 395.479V500H148V310.97Z" fill="#FEFEFE"/>
        </svg> */}
      </div>
    </div>


    <div className="container">
      <div className="flex w-full">
          <img className="w-1/2 -mt-[12.5%] block ml-auto mr-auto " src="https://atlantis.nyc3.digitaloceanspaces.com/media/legacy/atlantis/Things_To_Do/Water_Park/Beaches/Hero/Experiences_Beach.jpg" />
      </div>
      

      <div className="mt-12 flex w-full flex-wrap justify-between threeColIconsText">
          {/* loop items */}
          <div className="flex w-full md:w-[48%] lg:w-[31%] mb-12 md:mb-16 lg:mb-32">
              <img
                      src={ `https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/2214px-How_to_use_icon.svg.png` } 
                      alt={ `` } 
                      className={ `flex self-start object-contain w-[55px] h-[55px]` } 
              /> 
              <div className="flex flex-col">
                  <div className="flex items-center ml-6 ">
                      <p className={ theme.text['H4'] + 'icon-block-title flex items-center' }>Web Copywriting</p>
                  </div>
                  <div className="ml-6 mt-4">
                      <p className={ theme.text['FOOTER'] }>
                          Deliver compelling customer-focused content and campaign landing pages with strong calls-to-action. 
                      </p>
                  </div>
              </div>  
          </div>
          {/* end loop */}
            {/* loop items */}
            <div className="flex w-full md:w-[48%] lg:w-[31%] mb-12 md:mb-16 lg:mb-32">
                  <img
                      src={ `https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/2214px-How_to_use_icon.svg.png` } 
                      alt={ `` } 
                      className={ `flex self-start object-contain w-[55px] h-[55px]` } 
                    /> 
              <div className="flex flex-col">
                  <div className="flex items-center ml-6 ">
                      <p className={ theme.text['H4'] + 'icon-block-title flex items-center' }>eBooks and Whitepapers</p>
                  </div>
                  <div className="ml-6 mt-4">
                      <p className={ theme.text['FOOTER'] }>
                        Grow your readership and establish your authority with well written and stunning eBooks and whitepapers.  
                      </p>
                  </div>
              </div>  
          </div>
          {/* end loop */} 
              {/* loop items */}
              <div className="flex w-full md:w-[48%] lg:w-[31%] mb-12 md:mb-16 lg:mb-32">
                  <img
                    src={ `https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/2214px-How_to_use_icon.svg.png` } 
                    alt={ `` } 
                    className={ `flex self-start object-contain w-[55px] h-[55px]` } 
                  /> 
              <div className="flex flex-col">
                  <div className="flex items-center ml-6 ">
                      <p className={ theme.text['H4'] + 'icon-block-title flex items-center' }>eBooks and Whitepapers and newspapers</p>
                  </div>
                  <div className="ml-6 mt-4">
                      <p className={ theme.text['FOOTER'] }>
                        Grow your readership and establish your authority with well written and stunning eBooks and whitepapers.  
                      </p>
                  </div>
              </div>  
          </div>
          {/* end loop */}
                     {/* loop items */}
                     <div className="flex w-full md:w-[48%] lg:w-[31%] mb-12 md:mb-16 lg:mb-32">
                  <img
                    src={ `https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/2214px-How_to_use_icon.svg.png` } 
                    alt={ `` } 
                    className={ `flex self-start object-contain w-[55px] h-[55px]` } 
                  /> 
              <div className="flex flex-col">
                  <div className="flex items-center ml-6 ">
                      <p className={ theme.text['H4'] + 'icon-block-title flex items-center' }>eBooks and Whitepapers and newspapers</p>
                  </div>
                  <div className="ml-6 mt-4">
                      <p className={ theme.text['FOOTER'] }>
                        Grow your readership and establish your authority with well written and stunning eBooks and whitepapers.  
                      </p>
                  </div>
              </div>  
          </div>
          {/* end loop */}
      </div>

      <div className="hidden invisible" aria-hidden="true">
        <style type="text/css">
          { animationClass }
          { animationKeyframes }
        </style>
      </div>
      <div className={` mt-12 mb-20 flex w-full flex-wrap justify-between relative `}>
        <div className={ `frosted-glass p-8 lg:p-14 w-full` }>
                  
                  <q className={ theme.text['Q'] + slides[slide].class +  ' block transition-all ease-in-out' }>
                      {slides[slide].heading}
                  </q>
                  {/* <p className={ theme.text['P_BLD'] }>
                      { content.quote.name }
                  </p>
                  <small className={ theme.text['FOOTER'] }>
                      { content.quote.company }
                  </small> */}
 
          </div>
          <div className={`w-36 flex bg-rm-pale-grey`}>
                <button className={`flex-1 px-5 py-3 text-40px`} onClick={prevSlide}>
                   {/* <FontAwesomeIcon icon={faAngleLeft} /> */}
                </button>
                <button className={`flex-1 px-5 py-3 text-40px`} onClick={nextSlide}>
                    {/* <FontAwesomeIcon icon={faAngleRight} /> */}
                </button>
            </div>
      </div>          
    </div>

    {/* vertical slider */}
    <div className="bg-rm-black text-rm-white w-full block">
    <div className={ `block invisible` } style={ { height:slideHeight + 'px' } } aria-hidden="true"></div>
    <div ref={outerContainer} className={ `container ` + `flex-wrap relative`}  >
          <div ref={firstSlide} className="flex flex-col ml-auto mr-auto w-[95%] md:flex-row md:w-full items-center sticky -translate-y-1/2 top-[50%]" style={ { height : slideHeight } }>
              <div className="w-full h-[45%] md:w-[50%] md:h-[80%] flex items-center" >
                <div className="h-[100%] md:h-[70%]">
                    <div role={`progressbar`} aria-valuenow="0" aria-labelledby={`slides-main`} className="h-full w-[7px]">
                      { vslides.map( (key)  => (
                          <div ref={ el => progressBar.current[ key.number ] = el } className="overflow-hidden border-b-8 last:border-b-0 border-rm-black bg-rm-white transition-all ease-out"  key={ key.number } style={ { height: 100 / ( vslides.length  + 1 )  + '%' } } >
                            <div className="w-full h-0 transition-all ease-out"></div>
                          </div>
                      ) ) } 
                    </div>
                    <AnchorLink
                      to='/sample-page/#skipVerticalSlider'
                      title="Skip to the next section"
                      className={ `hidden md:flex ` + theme.text[`H4_LTE`]  + `items-center text-rm-grey h-[30%]`}
                    >
                    Skip
                  </AnchorLink>
                </div>
                <div id="slides-main" className="ml-[10%] mr-[10%]">
                  <p className={ theme.text['CIRCLE_NUM'] + 'text-rm-green border-rm-green' }> { vslide + 1 } </p>
                  <h2 className={ theme.text['H2']  + 'mt-10'}> { vslides[vslide].heading } </h2>
                  <p className={ theme.text['P_STD'] + 'mt-6'}> { vslides[vslide].p } </p>
                </div>
              </div>
              
              <img className="w-full h-[45%] mt-[5%] md:mt-0 md:h-auto md:w-[50%] lg:h-full block object-cover " src={ vslides[vslide].img }  />
              <AnchorLink
                      to='/sample-page/#skipVerticalSlider'
                      title="Skip to the next section"
                      className={ `md:hidden text-left w-full mt-[2%] h-[3%] ` + theme.text[`H4_LTE`]  + `flex items-center text-rm-grey`}
                    >
                    Skip
                  </AnchorLink>
          </div>
          
          { vslides.map( (key) => (
            <div ref={ el => otherSlides.current[ key.number ] = el } key={ key.heading } className={ `block invisible` } style={ { height:slideHeight + 'px' } } aria-hidden="true" ></div>
          ) ) }

        </div> 
      </div>
      <div id="skipVerticalSlider" className="invisible" aria-hidden="true" ></div>
    </>
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
    }
  }
` 