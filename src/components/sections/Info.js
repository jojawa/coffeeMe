import React from "react"
import { Link } from "gatsby"
import Title from "../global/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
              reiciendis consectetur! Alias saepe aliquam, veniam laudantium
              nemo dolores repudiandae. Reiciendis nihil provident facilis
              mollitia eveniet.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
