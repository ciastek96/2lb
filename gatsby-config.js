module.exports = {
  siteMetadata: {
    title: "2LB",
    titleTemplate: "%s · 2LB",
    titleAlt: "2LB - renowacja kostki brukowej",
    description:
      "Renowacja, mycie oraz impregnacja kostki brukowej, usługi brukarskie, projektowanie ogrodów",
    url: "https://www.2lb.pl", // No trailing slash allowed!
    siteLanguage: "pl",
    image: "src/assets/logo10.png", // Path to your image you placed in the 'static' folder
    favicon: "src/assets/favicon.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "v5jqovx8",
        dataset: "production",
        token: `sktbXZnO7A9I4SjbGNSIi9KRQzfsCZ9tyiTBDJEjyNERSYOcBPp5MJSUST4dHQSYw3o7OGqXpbqkVggh07jPCxf0kFuQf5hAPg5N1TDsuLTmUPeCx6lvwZ9BTgJVCXXwXtY5AKLuAgcbQmRdFh8QXixOVNW9JnfldsVJZ17ZwnKKvAQGd9uv`,
        graphqlTag: "default",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
