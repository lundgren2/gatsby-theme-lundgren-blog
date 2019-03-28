const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    {
      allFile(filter: { name: { eq: "index" } }) {
        edges {
          node {
            name
          }
        }
      }
    }
  `)
  console.log(Object.keys(result))
  const pages = result.data.allFile.edges.map(({ node }) => node)
  console.log(pages)
  pages.forEach(page => {
    console.log(page)

    actions.createPage({
      path: `/${page.name}`,
      component: require.resolve('./src/templates/page.js'),
      context: {
        // body: page.childMdx.code.body,
      },
    })
  })
}

// This is a shortcut so MDX can import components without gross relative paths.
// Example: import { Image } from '$components';
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: { $components: path.resolve(__dirname, 'src/components') },
    },
  })
}
exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-export-default-from',
  })
}
