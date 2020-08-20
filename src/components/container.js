import React from 'react'
import styled from 'styled-components'

import Header from '../components/header'
import Footer from '../components/footer'
import Content from '../components/content'


const ContainerStyled = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-rows: max-content auto minmax(min-content, 200px);
  width: 100vw;
  height: 100vh;
`

export default function Container({ children }) {
  return (
    <ContainerStyled>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </ContainerStyled>
  )
}
