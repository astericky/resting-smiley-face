import React from 'react'
import styled from 'styled-components'

import Header from '../components/header'
import Footer from '../components/footer'

const ContainerStyled = styled.div`
  display: grid;
`

export default function Container({ children }) {
  return (
    <ContainerStyled>
      <Header />
      {children}
      <Footer />
    </ContainerStyled>
  )
}
