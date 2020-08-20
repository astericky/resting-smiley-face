import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Nav from '../components/nav'

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

  a {
    background: none;
    text-shadow: none;
  }

  @media (min-width: 475px) {
    font-size: 2rem;
  }
`

const Logo = ({ text }) => (
  <LogoStyle><Link to="/">{text}</Link></LogoStyle>
)

export default function header() {
  return (
    <HeaderStyle>
      <Logo text="&#128513; Resting Smiley Face" />
      <Nav />
    </HeaderStyle>
  )
}
