const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/pages/postTemplate.js`)
  const offerPageTemplate = path.resolve(`src/pages/offerPageTemplate.js`)

  const postQuery = await graphql(
    `
      {
        allSanityPost {
          nodes {
            title
            slug {
              current
            }
          }
        }
      }
    `,
    { limit: 1000 }
  )

  const offerPageQuery = await graphql(
    `
      {
        allSanityOffer {
          nodes {
            title
            slug {
              current
            }
          }
        }
      }
    `,
    { limit: 1000 }
  )

  postQuery.data.allSanityPost.nodes.forEach(post => {
    createPage({
      path: `aktualnosci/${post.slug.current}`,
      component: blogPostTemplate,
      context: {
        data: post.slug.current,
      },
    })
  })

  offerPageQuery.data.allSanityOffer.nodes.forEach(item => {
    createPage({
      path: `oferta/${item.slug.current}`,
      component: offerPageTemplate,
      context: {
        data: item.slug.current,
      },
    })
  })
}
