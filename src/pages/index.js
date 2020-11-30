import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Home() {

  const data = useStaticQuery(graphql`
                query MyQuery {
                allStripePrice {
                    edges {
                    node {
                        id
                        unit_amount_decimal 
                            product {
                            id
                            images
                            name
                            description
                            }
                    }
                }
            }
        }
    `)

  return <div>
    <h1>START SHOPPING!!</h1>
    <div>
      View your items: <button className="snipcart-checkout">CheckOut</button> <br />
      Number of items in cart:<span className="snipcart-items-count" ></span> <br />
      Total Amount: <span className="snipcart-total-price"></span>
    </div>

    <div>

      <h1>Products</h1>
      {
        data.allStripePrice.edges.map(({ node }) => {
          return (
            <div key={node.id}>
              <h2>{node.product.name}</h2>
              <img src={node.product.images[0]} alt="display product" height="200" width="350" />
              <p>{node.product.description}</p>

              <button className="snipcart-add-item"
                data-item-id={node.id}
                data-item-price={node.unit_amount_decimal}
                data-item-url="https://aj-snipcart.netlify.app/"
                data-item-description={node.product.description}
                data-item-image={node.product.images[0]}
                data-item-name={node.product.name}>
                Add to cart
              </button>
            </div>
          )
        })
      }
    </div>
    <div>
    </div>
  </div>
}
