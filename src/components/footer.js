import React from 'react'
import styled from 'styled-components'

const FooterStyled = styled.footer`
  padding: 0 16px;
  background: #efefef;
`

export default function Footer() {
  return (
    <FooterStyled>
      &copy; Chris Sanders 2020
    </FooterStyled>
  )
}
