require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const path = require('path');

const config = require('./config/website');

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: path.join(__dirname, 'src', 'pages'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `content`,
        name: 'content',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1380,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
};

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const wpconfig = getConfig();
  if (stage.startsWith('develop') && wpconfig.resolve) {
    wpconfig.resolve.alias = {
      ...wpconfig.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    };
  }
};
