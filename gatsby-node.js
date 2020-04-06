const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/postTemplate.js`)
  const offerPageTemplate = path.resolve(`src/templates/offerPageTemplate.js`)

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
    `
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
    `
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
