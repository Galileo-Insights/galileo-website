module.exports = {
  siteMetadata: {
    title: 'Galileo Insights',
    description:
      'Having worked at Fortune 20 companies, we know how to build software that integrates behind corporate firewalls. We work with ideas scribbled in the margins just as easily as we manage existing code. We help bring concepts to life.',
    author: '',
    url: 'https://galileo-insights.com',
    siteUrl: 'https://galileo-insights.com',
    image: '/img/meta.png',
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-typescript',
    'gatsby-plugin-eslint',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-transition-link',
    'gatsby-plugin-react-helmet',
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
        icon: 'src/images/favicon.png',
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
