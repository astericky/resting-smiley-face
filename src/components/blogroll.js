import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

const BlogRollStyled = styled.section`
  h3 {
    margin: 0 0 6px;
  }
`

function BlogRoll({ 
  data: { 
    allMarkdownRemark: { 
      edges: posts,
    },
  },
}) {
  return (
    <BlogRollStyled>
      { posts &&
        posts.map(({ node: post }) => (
          <article
            className={`blog-post-card${post.frontmatter.featuredpost ? ' is-featured' : ''}`} 
            key={post.id}
          >
            <header>
              <h3>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h3>
              <div className="blog-post-meta">{post.frontmatter.date}</div>
            </header>
            <p>{post.excerpt}</p>
            <Link to={post.frontmatter.path}>Read More</Link>
          </article>
        ))
      }
    </BlogRollStyled>
  )
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`query BlogRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            frontmatter {
              path
              title
              date(formatString: "MMMM DD, YYYYY")
            }
          }
        }
      }
    }`}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
