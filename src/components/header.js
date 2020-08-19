import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const HeaderStyle = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas:
    'logo space nav';
`

const LogoStyle = styled.h1`
  margin: 0;
`

const Logo = ({ text }) => (
  <LogoStyle>{text}</LogoStyle>
)

const NavStyle = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-area: nav;

  a {
    text-align: center;
  }
`

export default function header() {
  return (
    <HeaderStyle>
      <Logo text="Resting Smiley Face" />
      <NavStyle>
        <Link to="/">Home</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </NavStyle>
    </HeaderStyle>
  )
}
