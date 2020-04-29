import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Hero from "../components/global/Hero"
import Info from "../components/sections/Info"
import Menu from "../components/sections/Menu"
import Products from "../components/sections/Products"
import Contact from "../components/sections/Contact"

import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero
      img={data.img.childImageSharp.fluid}
      title="Coffee Me"
      styleClass="default-background"
    />
    <Info />
    <Menu items={data.menu} />
    <Products />
    <Contact />
  </Layout>
)
export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    menu: allContentfulCoffeeItem {
      nodes {
        id
        category
        title
        price
        description {
          description
        }
        image {
          fixed(width: 50, height: 50) {
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
`
export default IndexPage
