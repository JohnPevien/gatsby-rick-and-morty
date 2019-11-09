/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

//create characters pages
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      rickandmorty {
        characters {
          info {
            count
          }
        }
      }
    }
  `)
    
    const pageCount = result.data.rickandmorty.characters.info.count;

    const charactersTemplate = path.resolve(`src/templates/characters.js`)
    
   for (var i = 1; i <= pageCount; i++) {
    createPage({
      path: `/characters/${i}`,
      component: charactersTemplate,
      context: {
          page: i,
          totalPage: pageCount 
      },
    })
  }
}
