/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `markdown-pages`,
      }
    },
    `gatsby-transformer-remark`,
  ],

  siteMetadata: {
    title: 'Resting Smiley Face',
    titleTemplate: '%s - Resting Smiley Face',
    description: 'Swifty Sanders\' Web Playground',
    url: 'https://www.restingsmileyface.com',
    twitterUsername: '@swiftysanders',
  }
}
