import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Container from '../components/container'

const ArticleStyled = styled.article`
`

export default function BlogPost({
  data: {
    markdownRemark: {
      frontmatter,
      html
    },
  },
}) {
  return (
    <Container>
      <ArticleStyled className="blog-post">
        <header className="blog-post-header">
          <h1>{frontmatter.title}</h1>
          <h5>{frontmatter.date}</h5>
        </header>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </ArticleStyled>
    </Container>
  )
}

export const pageQuery = graphql`query($path: String!) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      path
      title
    }
  }
}`
