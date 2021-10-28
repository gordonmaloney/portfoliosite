import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <>
        <div className="hr" />

        <div className="menuBtns">

        <div className="menuBtn">
            <Link to="/">home</Link>
          </div>


          <div className="menuBtn">
            <Link to="/work">my work</Link>
          </div>
          
          <div className="menuBtn">
            <a href="mailto:gordonmaloney@gmail.com" target="_blank">
              get in touch
            </a>
          </div>
        </div>
        </>
    )
}
