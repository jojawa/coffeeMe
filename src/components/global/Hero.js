import React from "react"
import BackgroundImage from "gatsby-background-image"
//function based conponent

export default function Hero({ img, styleClass, title, children }) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold ">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  )
}

Hero.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}
