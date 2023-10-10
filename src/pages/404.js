import React from "react"
import Layout from "../components/global/Layout"
import { Container } from "../components/global/Wrappers"
import Menu from "../components/global/FooterMenu"
import { theme } from "../static/theme"
import { StaticImage } from "gatsby-plugin-image"

const NotFound = () => {
  return (
      <Container>
        <div className={`page404 !max-w-none !px-0`}>
          <div className={`grid lg:grid-cols-3 gap-10 lg:gap-4 items-center`}>
            <div className={`lg:col-span-2`}>
              <p className={`${theme.text.H4}`}>Page Not Found</p>
              <h1>We’re sorry, the dog stole your page…</h1>
              <p className={`${theme.text.P_STD}`}>Finley can be a mischievous little dog when it comes to socks, rocks and web pages, but we’re sure he’ll bring it back soon. In the meantime, please try one of these equally awesome pages instead…</p>
            </div>
            <div className={` max-w-sm mx-auto lg:max-w-none lg:mx-0 lg:col-span-1`}>
              <StaticImage src="../static/finley.png" />
            </div>
          </div>
        </div>
        <Menu />
      </Container>
  )
}

export default NotFound