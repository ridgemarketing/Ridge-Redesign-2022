import React from "react"
import ReactDOM from 'react-dom'
import { graphql } from "gatsby"
import { theme } from '../static/theme'


export default function Home() {
  return ( 
    <>
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

    </>
  )
  
}