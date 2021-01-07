import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/react"
import Logo from "../images/Axon-Logo.svg"

const Header = ({ siteTitle }) => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: "0",
        width: "100%",
        backgroundColor: "white",
        boxShadow: "0px -5px 15px 0px rgba(0,0,0,0.75)",
        zIndex: "100",
      }}
    >
      <nav
        css={css`
          display: flex;
          width: 100%;
          max-height: 7vh;
          max-width: 1300px;
          align-items: center;
          & > .nav-items {
            margin-left: auto;
            margin-bottom: 0;
            display: flex;
            & > .nav-item {
              list-style: none;
              font-family: "Cairo", sans-serif;
              font-weight: 600;
              font-size: 18px;
              margin: 0 10px;
            }
          }
        `}
      >
        <div className="logo">
          <img
            css={css`
              height: 70px;
              width: auto;
              margin-bottom: 0;
            `}
            src={Logo}
            alt=""
          />
        </div>
        <ul className="nav-items">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Services</li>
          <li className="nav-item">Products</li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
