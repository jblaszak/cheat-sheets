module.exports = {
  pathPrefix: "/cheat-sheets",
  siteMetadata: {
    title: `Jo's Developer Cheat Sheet`,
    description: `My cheat sheet of helpful web developer code snippets and theories!`,
    author: `Jo Blaszak`,
    // siteUrl: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Jo's Developer Cheat Sheet`,
    //     short_name: `Dev Cheat Sheet`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     // This will impact how browsers show your PWA/website
    //     // https://css-tricks.com/meta-theme-color-and-trickery/
    //     // theme_color: `#663399`,
    //     display: `standalone`,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
