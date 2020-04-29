import React from "react"
import Title from "../global/Title"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getProducts = graphql`
  {
    products: allContentfulCoffeeProduct {
      nodes {
        id
        image {
          fluid(maxHeight: 400) {
            src
            ...GatsbyContentfulFluid
          }
        }
        price
        title
      }
    }
  }
`

const Products = () => {
  const data = useStaticQuery(getProducts)
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our products" />
        <div className="row">
          {data.products.nodes.map(product => {
            return (
              <div
                className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3"
                key={product.id}
              >
                <div className="card" styles={{ minHeight: "100%" }}>
                  <Img
                    fluid={product.image.fluid}
                    className="card-img-top img-height-eq"
                  />
                  <div className="card-body text-center">
                    <h6>{product.title}</h6>
                    <h6>${product.price.toFixed(2)}</h6>
                    <button
                      className="btn btn-yellow text-capitalize mt-3 snipcart-add-item"
                      data-item-id={product.id}
                      data-item-price={product.price}
                      data-item-image={product.image.fluid.src}
                      data-item-name={product.title}
                    >
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Products
