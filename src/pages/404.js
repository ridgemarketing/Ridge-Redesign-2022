import React from "react"
import Layout from "../components/global/Layout"
import { Container } from "../components/global/Wrappers"
import Menu from "../components/global/FooterMenu"

const NotFound = () => {
  return (
    <Layout>
          <Container>
            <div class="page404">
                <h4>Page Not Found</h4>
                <h1>We’re sorry, the dog stole your page…</h1>
                <p>Finley can be a mischievous little dog when it comes to socks, rocks and web pages, but we’re sure he’ll bring it back soon. In the meantime, please try one of these equally awesome pages instead…</p>
            </div>
            <Menu />
          </Container>
    </Layout>
  )
}

export default NotFound