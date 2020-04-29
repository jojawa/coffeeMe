import React from "react"
import Title from "../global/Title"

const Contact = () => {
  return (
    <div>
      <section className="contact py-5">
        <div className="container">
          <Title title="contact us" />
          <div className="row">
            <div className="col-10 col-sm-8 col-md-6 mx-auto">
              <form
                action="https://formspree.io/seitujoseph@gmail.com"
                method="POST"
              >
                {/* name */}
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Enter your first name"
                  />
                </div>
                {/* email */}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                {/* description */}
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    id="description"
                    cols="30"
                    rows="10"
                    className="form-control"
                    placeholder="Enter your description"
                  ></textarea>
                </div>
                {/* submit */}
                <button
                  type="submit"
                  className="btn btn-yellow btn-block text-captialize mt-5"
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
