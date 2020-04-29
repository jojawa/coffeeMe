import React, { Component } from "react"
import Title from "../global/Title"
import Img from "gatsby-image"

const getCategories = items => {
  let sortedItems = items.map(sorted => {
    return sorted.category // displays all items in all categories
  })

  let sortedCategories = new Set(sortedItems) //creates set based on unique categories
  let categories = Array.from(sortedCategories) //Converts set into an array
  categories = ["all", ...categories]
  return categories
}

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.nodes,
      coffeeItems: props.items.nodes,
      categories: getCategories(props.items.nodes),
    }
  }
  handleItems = categoria => {
    let fullList = [...this.state.items]
    if (categoria === "all") {
      this.setState(() => {
        return { coffeeItems: fullList }
      })
    } else {
      let filteredItems = fullList.filter(node => node.category === categoria)
      this.setState(() => {
        return { coffeeItems: filteredItems }
      })
    }
  }
  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Customer Favorites" />
            {/* Filter */}
            <div className="row">
              <div className="col-10 mx-auto text-center">
                {this.state.categories.map(categorie => {
                  return (
                    <button
                      type="button"
                      key={categorie.id}
                      className="btn btn-yellow text-capitalize m-3"
                      onClick={() => {
                        this.handleItems(categorie)
                      }}
                    >
                      {categorie}
                    </button>
                  )
                })}
              </div>
            </div>
            <div className="row">
              {this.state.coffeeItems.map(node => {
                return (
                  <div
                    key={node.id}
                    className="col-11 col-sm-6 d-flex my-3 mx-auto"
                  >
                    <div>
                      <Img fixed={node.image.fixed} />
                    </div>
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-contnent-between">
                        <small>
                          <h6 className="mb-0">{node.title}</h6>
                        </small>
                        <small>
                          <h6 className="mb-0 text-yellow">${node.price}</h6>
                        </small>
                      </div>
                      <p className="text-muted">
                        {node.description.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Customer Favorites" />
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                there are no items to display!
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}
