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
              <h1>Thank you</h1>
              <p className={`${theme.text.P_STD}`}>Finley’s already wagging his tail — looks like your message made it through! While he’s off trying to trade a sock for a treat, our team will be digging into your submission and getting back to you soon. Until then, feel free to sniff around some of our other pages — they’re almost as awesome as Finley.
</p>
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