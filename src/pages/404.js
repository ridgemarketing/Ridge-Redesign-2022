import React from "react"
import Layout from "../components/global/Layout"
import { Container } from "../components/global/Wrappers"
import Menu from "../components/global/FooterMenu"
import { theme } from "../static/theme"

const NotFound = () => {
  return (
    <Layout>
          <Container>
            <div class="page404">
                <p className={`${theme.text.H4}`}>Page Not Found</p>
                <h1>We’re sorry, the dog stole your page…</h1>
                <p className={`${theme.text.P_STD}`}>Finley can be a mischievous little dog when it comes to socks, rocks and web pages, but we’re sure he’ll bring it back soon. In the meantime, please try one of these equally awesome pages instead…</p>
            </div>
            <Menu />
          </Container>
    </Layout>
  )
}

export default NotFound