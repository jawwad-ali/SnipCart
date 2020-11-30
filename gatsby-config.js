require("dotenv").config({
  path: `.env.development`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-plugin-snipcartv3',
      options: {
        apiKey: process.env.SNIPCART_SECRET_KEY
      }
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Price"],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: false,
      },
    },
  ],
}
