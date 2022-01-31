import React from "react"
import { HashLink as Link } from "react-router-hash-link"
import "./ScrollButton.scss"
export default function ScrollButton() {
    return (
        <Link smooth to="#about" className="scroll-arrow">
          <span/>
          <span/>
          <span/>
        </Link>
    )
}


                  