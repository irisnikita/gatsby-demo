// gatsby-config.js
const path = require('path');

module.exports = {
    siteMetadata: {
        title: 'Vuitech',
        description: 'This project allow me write some blog to share about technology',
        author: 'truongvi1999'
    },
    plugins: [
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 590
                        }
                    }
                ]
            }
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        'gatsby-plugin-styled-components',
        'gatsby-transformer-sharp', 
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Vi\' Blog',
                short_name: 'Vi\' Blog',
                start_url: '/',
                background_color: '#6b37bf',
                theme_color: '#6b37bf',
                // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
                // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
                display: 'standalone',
                icon: 'src/assets/images/icon.png' // This path is relative to the root of the site.
            }
        },
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                Src: path.join(__dirname, 'src'),
                Assets: path.join(__dirname, 'src/assets'),
                Pages: path.join(__dirname, 'src/pages'),
                Components: path.join(__dirname, 'src/components')
            }
        },
        {
            resolve: 'gatsby-plugin-typescript',
            options: {
                isTSX: true, // defaults to false
                jsxPragma: 'jsx', // defaults to "React"
                allExtensions: true // defaults to false
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography'
            }
        }
    ]
};