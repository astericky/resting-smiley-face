import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const HeaderStyle = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas:
    'logo space nav';
  padding: 16px;
  background: #eeeeff;
`

const LogoStyle = styled.h1`
  align-self: center;
  margin: 0;
  font-size: 1.25rem;

  @media (min-width: 600px) {
    font-size: 2rem;
  }
`

const Logo = ({ text }) => (
  <LogoStyle>{text}</LogoStyle>
)

const HamburgerIcon = () => (
  <div className="hamburger-icon">
    &#9776;
  </div>
)

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

const NavStyle = styled.nav`
  display: none;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 12px;
  align-self: center;

  a {
    text-align: center;
  }

  @media (min-width: 600px) {
    display: inline-grid;
  }
`

export default function header() {
  return (
    <HeaderStyle>
      <Logo text="&#128513; Resting Smiley Face" />
      <NavContainer>
        <HamburgerIcon />
        <NavStyle>
          <Link to="/">Home</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </NavStyle>
      </NavContainer>
    </HeaderStyle>
  )
}
