require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})
const postcssPresetEnv = require('postcss-preset-env')
const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'dougmcnish',
    description: 'World Class Vegan Chef',
    siteUrl: 'https://github.com/BoraALAP/doug_mcnish'
  },
  plugins: [
    {
      resolve: `gatsby-source-shopify`,
      options: {
        // apiKey: process.env.SHOPIFY_API_KEY,
        password: process.env.SHOPIFY_APP_PASSWORD,
        storeUrl: process.env.GATSBY_MYSHOPIFY_URL
        // The domain name of your Shopify shop. This is required.
        // Example: 'gatsby-source-shopify-test-shop' if your Shopify address is
        // 'gatsby-source-shopify-test-shop.myshopify.com'.
        // shopName: process.env.GATSBY_SHOP_NAME,

        // An API access token to your Shopify shop. This is required.
        // You can generate an access token in the "Manage private apps" section
        // of your shop's Apps settings. In the Storefront API section, be sure
        // to select "Allow this app to access your storefront data using the
        // Storefront API".
        // See: https://help.shopify.com/api/custom-storefronts/storefront-api/getting-started#authentication
        // accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN

        // Set verbose to true to display a verbose output on `npm run develop`
        // or `npm run build`. This prints which nodes are being fetched and how
        // much time was required to fetch and process the data.
        // Defaults to true.

        // verbose: true,
        // enableWebp: false
      }
    },
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    },
    'gatsby-transformer-yaml',
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  filter: { fields: { contentType: { eq: "posts" } } }
                  sort: { frontmatter: {date: DESC} },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date(formatString: "dddd MMMM DD, YYYY")
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'RSS Feed'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-offline'
      // options: {
      //   runtimeCaching: [
      //     {
      //       // Use cacheFirst since these don't need to be revalidated (same RegExp
      //       // and same reason as above)
      //       urlPattern: /(\.js$|\.css$|static\/)/,
      //       handler: `cacheFirst`
      //     },
      //     {
      //       // Add runtime caching of various other page resources
      //       urlPattern:
      //         /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
      //       handler: `staleWhileRevalidate`
      //     },
      //     {
      //       // uploadcare
      //       urlPattern:
      //         /^https:\/\/ucarecdn.com\/[-a-zA-Z0-9@:%_\+.~#?&//=]*?\/10x\//,
      //       handler: `staleWhileRevalidate`
      //     }
      //   ],
      //   skipWaiting: true,
      //   clientsClaim: true
      // }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'dougmcnish',
        short_name: 'dougmcnish',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#000000',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: `${__dirname}/src/assets/favicon.svg` // This path is relative to the root of the site.
      }
    },

    // Add static assets before markdown files
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images`,
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'pages'
      }
    },

    // images
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Poppins:600,700,800', 'Open Sans:400,500,600,700,800']
        }
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // gatsby-remark-relative-images must
          // go before gatsby-remark-images
          'gatsby-remark-relative-images-v2',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false
            }
          },
          `gatsby-remark-responsive-iframe`
        ]
      }
    },

    // css (replace with gatsby-plugin-sass for v2)
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          postcssPresetEnv({
            browsers: '> 0.5%, last 2 versions, ie 11'
          })
        ]
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-preset-env`)({
            browsers: '> 0.5%, last 2 versions, ie 11'
          })
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        // Setting a color is optional.
        color: 'white',
        // Disable the loading spinner.
        showSpinner: false
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        stylesPath: `${__dirname}/src/cms/admin.css`,
        enableIdentityWidget: true
      }
    },
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
}
