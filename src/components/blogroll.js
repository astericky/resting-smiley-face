import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
// import { Link, graphql, StaticQuery } from 'gatsby'

function BlogRoll({ 
  data: { 
    allMarkdownRemark: { 
      edges: posts,
    },
  },
}) {
  return (
    <div>
      { posts &&
        posts.map(({ node: post }) => (
          <article key={post.id}>
            {post.frontmatter.title}
          </article>
        ))
      }
    </div>
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
