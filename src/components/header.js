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
  margin: 0;
`

const Logo = ({ text }) => (
  <LogoStyle>{text}</LogoStyle>
)

const NavStyle = styled.nav`
  display: inline-grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 12px;
  grid-area: nav;
  align-self: center;

  a {
    text-align: center;
  }
`

export default function header() {
  return (
    <HeaderStyle>
      <Logo text="&#128513; Resting Smiley Face" />
      <NavStyle>
        <Link to="/">Home</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </NavStyle>
    </HeaderStyle>
  )
}
