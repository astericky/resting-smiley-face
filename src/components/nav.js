import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavContainer = styled.div`
  grid-area: nav;
  align-self: center;

  .hamburger-icon {
    font-size: 32px;
  }
  
  @media (min-width: 600px) {
    .hamburger-icon {
      display: none;
    }
  }
`

const HamburgerIcon = () => (
  <div className="hamburger-icon">
    &#9776;
  </div>
)

const NavStyle = styled.nav`
  display: none;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 12px;
  align-self: center;

  a {
    text-align: center;
    text-shadow: none;
  }

  .nav-active {
    position: absolute;
    width: 100vw;
    height: 100vh;
  }

  @media (min-width: 600px) {
    display: inline-grid;
    
  }
`

export default function Nav() {
  return (
    <NavContainer>
      <HamburgerIcon />
      <NavStyle>
        <Link to="/">Home</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        {/* <Link to="/account">Account</Link> */}
      </NavStyle>
    </NavContainer>
  )
}
