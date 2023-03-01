import React, {useRef, useState, useEffect, useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { theme, ThemeContext } from '../static/theme'
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Blog = () => {

  const getThePosts = useStaticQuery(graphql`
    query GetBlogPosts {
        allWpPost(sort: {fields: date, order: DESC}) {
        nodes {
            id
            title
            content
            link
            excerpt
            featuredImage {
              node {
                    localFile {
                    childImageSharp {
                        gatsbyImageData
                    }
                  }
                  altText
              }
            }
            categories {
              nodes {
                  id
                  name
              }
            }
            tags {
              nodes {
                  id
                  name
              }
            }
        }
        }
    }
  `)

  const context               = useContext(ThemeContext);
  const posts                 = getThePosts.allWpPost.nodes;
  const featured              = posts[0];
  const initialCount          = 5;
  const postsToAdd            = 4;
  const [counter, setCounter] = useState(initialCount);

  let button                  = useRef(null);
  let buttonDisplay           = '';

  useEffect(() => {
    context.updateHeaderBkgcolor('white');
  }, []);
  
  const loadMore = () =>{
      setCounter(counter + postsToAdd);
  }

  if(counter >= posts.length){
    buttonDisplay ='hidden invsibile';
  }

  return ( 
   <>
   <div className="w-full bg-cover bg-center bg-no-repeat" style={{backgroundImage:'url("https://rm2022dev.wpengine.com/wp-content/uploads/2022/07/blog-hero.png")'}}>
      <hgroup className="container">
        <h1 className={theme.text.H1_STD + 'text-rm-white text-left py-12'}>
            The Barn of Brands <span className="text-rm-green">Blog</span>
        </h1>
      </hgroup>
    </div>
    <section className="bg-white mt-20">
      <div className="container">
        
        <article className="featured md:flex">
          <GatsbyImage className="w-full md:w-3/5" alt={featured.featuredImage.node.altText} image={featured.featuredImage.node.localFile.childImageSharp.gatsbyImageData || ` `} />
          <div className="w-full md:ml-[5%] md:w-[35%]">
            <h2 className={theme.text.H5 + 'mb-6'}>{featured.title}</h2>
            <p className={theme.text.P_STD + 'mb-6'}>{ (featured.excerpt.replace(/(<([^>]+)>)/gi, "")).substring(0,200) + '...'}</p>
            <Link to={`/blog` + featured.link} className={theme.text_links.BASE_STYLING + theme.text_links.STD + theme.text_links.FWD_BASE + theme.text_links.ARW_FWD_BLACK + theme.text_links.HOVER_ARW_FWD_GREEN + theme.text_links.HOVER_GREEN + `w-max` }>
              READ ARTICLE
            </Link>
          </div>
        </article>
        
        <div className="h-px border-b-2 border-b-rm-grey w-full border-solid mt-7 md:mt-20 opacity-20" aria-hidden="true"></div>
        
        <div className="flex flex-wrap flex-row mt-7 md:mt-20 lg:w-[90%] justify-between">
          {posts.slice(1,counter).map((post) => {
              return(
                <article key={post.id} className="w-full md:w-[45%] lg:mx-[2.5%] flex flex-col mb-7 lg:mb-20">
                    <GatsbyImage className={`object-cover h-[200px] w-full `} alt={post.featuredImage.node.altText} image={post.featuredImage.node.localFile.childImageSharp.gatsbyImageData || ` `} />
                    <h3 className={theme.text.H4 + 'mt-6'}>{post.title}</h3>
                    <p className={theme.text.P_STD + 'mt-2 mb-6'}>{ (post.excerpt.replace(/(<([^>]+)>)/gi, "")).substring(0,200) + '...'}</p>
                    <Link to={`/blog` + post.link} className={ theme.text_links.BASE_STYLING + theme.text_links.STD + theme.text_links.FWD_BASE + theme.text_links.ARW_FWD_BLACK + theme.text_links.HOVER_ARW_FWD_GREEN + theme.text_links.HOVER_GREEN + `w-max` }>
                      READ ARTICLE
                    </Link>
                </article>
              )
            }
          )}
        </div>

       <div className={`block ml-auto mr-auto my-20 text-center ${buttonDisplay}`}>
          <button type="button" ref={button} onClick={() => loadMore()} className={
              theme.button.BASE_STYLING +
              theme.button.GHOST_GREEN_HOVER_DARK +
              buttonDisplay
          }>
            LOAD MORE
          </button>
        </div>

      </div> 
    </section>
   </> 
  )
}
export default Blog
