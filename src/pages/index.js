import React from "react"
import ReactDOM from 'react-dom'
import { graphql } from "gatsby"
import { theme } from '../static/theme'


export default function Home() {
  return ( 
    <>
      <FeaturedProjectsCarousel />
    </>
  )
  
}