module.exports = {
  siteMetadata: {
    title: 'Galileo Insights',
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-typescript',
    'gatsby-plugin-eslint',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@common': `${__dirname}/src/common`,
          '@components': `${__dirname}/src/components`,
          '@hooks': `${__dirname}/src/hooks`,
          '@images': `${__dirname}/src/images`,
          '@redux': `${__dirname}/src/redux`,
          '@styles': `${__dirname}/src/styles`,
          '@utils': `${__dirname}/src/utils`,
          '@templates': `${__dirname}/src/templates`,
          '@views': `${__dirname}/src/views`,
        },
        extensions: [],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
