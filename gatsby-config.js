module.exports = {
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
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: `data`,
    //     path: `${__dirname}/data`,
    //   },
    // },
    // `gatsby-plugin-mdx`,
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-prismjs`,
    //         options: {
    //           // Class prefix for <pre> tags containing syntax highlighting;
    //           // defaults to 'language-' (e.g. <pre class="language-js">).
    //           // If your site loads Prism into the browser at runtime,
    //           // (e.g. for use with libraries like react-live),
    //           // you may use this to prevent Prism from re-processing syntax.
    //           // This is an uncommon use-case though;
    //           // If you're unsure, it's best to use the default value.
    //           classPrefix: "language-",
    //           // This is used to allow setting a language for inline code
    //           // (i.e. single backticks) by creating a separator.
    //           // This separator is a string and will do no white-space
    //           // stripping.
    //           // A suggested value for English speakers is the non-ascii
    //           // character '›'.
    //           inlineCodeMarker: null,
    //           // This toggles the display of line numbers globally alongside the code.
    //           // To use it, add the following line in gatsby-browser.js
    //           // right after importing the prism color scheme:
    //           //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
    //           // Defaults to false.
    //           // If you wish to only show line numbers on certain code blocks,
    //           // leave false and use the {numberLines: true} syntax below
    //           showLineNumbers: true,
    //           // If setting this to true, the parser won't handle and highlight inline
    //           // code used in markdown i.e. single backtick code like `this`.
    //           noInlineHighlight: false,
    //           // This adds a new language definition to Prism or extend an already
    //           // existing language definition. More details on this option can be
    //           // found under the header "Add new language definition or extend an
    //           // existing language" below.
    //           languageExtensions: [
    //             {
    //               language: "superscript",
    //               extend: "javascript",
    //               definition: {
    //                 superscript_types: /(SuperType)/,
    //               },
    //               insertBefore: {
    //                 function: {
    //                   superscript_keywords: /(superif|superelse)/,
    //                 },
    //               },
    //             },
    //           ],
    //           // By default the HTML entities <>&'" are escaped.
    //           // Add additional HTML escapes by providing a mapping
    //           // of HTML entities and their escape value IE: { '}': '&#123;' }
    //           escapeEntities: {},
    //         },
    //       },
    //     ],
    //   },
    // },
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
