import React from 'react'
import styled from 'styled-components'

const ContentStyled = styled.main`
  padding: 0 16px;
`

export default function Content({ children }) {
  return (
    <ContentStyled>
      {children}
    </ContentStyled>
  )
}
