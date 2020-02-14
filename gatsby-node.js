const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({ fromPath: '/', toPath: '/home/', redirectInBrowser: true, inPermanent: true })


//   createRedirect({ fromPath: '/', toPath: '/home', redirectInBrowser: true, isPermanent: true })
 

    return graphql(
      `
      {
        wordPress {
          pages (first: 100){
            nodes {
              title
              id
              uri
              slug
              content
              featuredImage{
                mediaItemUrl
              }
            }
          }
        } 
        wordPress {
          posts (first: 100){
            nodes {
              title
              slug
              uri
              content
              categories{
                nodes{
                 name
                  slug
                }
              }
            }
          }
        }
        wordPress {
          categories(first: 100) {
            nodes {
              slug
              name
              link
              count
              description
              posts (first: 100) {
                nodes {
                  uri
                  title
                  slug
                  id
                  excerpt
                  featuredImage {
                    mediaItemUrl
                  }
                }
              }
            }
          }
        }
        wordPress {
          tags {
            nodes {
              name
              slug
              tagId
              posts {
                nodes {
                  id
                  slug
                  title
                  excerpt
                  featuredImage {
                    mediaItemUrl
                  }
                  categories {
                    nodes {
                      slug
                      name
                      id
                    }
                  }
                }
              }
            }
          }
        }
      }
        
      `, 
    )
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        //page
        const PageTemplate = path.resolve(`src/templates/page.js`)
        result.data.wordPress.pages.nodes.forEach(edge => {
          
          const deCode = decodeURI(edge.slug);
          createPage({
            path: deCode,
            component: PageTemplate,
            context: edge,
          })
        })

        //post
        const PostTemplate = path.resolve(`src/templates/post.js`)
        result.data.wordPress.posts.nodes.forEach(edge => {
          edge.categories.nodes.map(cat => {
            const deCode = decodeURI( 'docs/' + cat.slug +'/'+ edge.uri);
            createPage({
              path: deCode,
              component: PostTemplate,
              context: edge,
            })
          })
          })

         //PostCategory
         const CatTemplate = path.resolve(`src/templates/category.js`)
         result.data.wordPress.categories.nodes.forEach(edge => {

           const deCode = decodeURI(edge.slug);
           createPage({
             path: '/docs/'+deCode,
             component: CatTemplate,
             context: edge,
           })
         })

         //Tag
         const TagTemplate = path.resolve(`src/templates/tag.js`)
         result.data.wordPress.tags.nodes.forEach(edge => {

           const deCode = decodeURI(edge.slug);
           createPage({
             path: '/tags/'+deCode,
             component: TagTemplate,
             context: edge,
           })
         })

      })
}