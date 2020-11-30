import React from "react"

const SingleProduct: React.FC = () => {
    return (
        <button className="snipcart-add-item"
            data-item-id="Laptop"
            data-item-price="1200"
            data-item-url="https://aj-snipcart.netlify.app/single-product/"
            data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
            data-item-image="https://lh3.googleusercontent.com/proxy/-MCu062i-0VdSniBqgdtpg_cU1qQYu-LOKpctr2l-0KFKUYv4fnaB87-D-LC_mleCcbs_P1uWuVialCFL7HAtNwg07YXkoGX6e6lTu545sXNtSdodh6cNKsfgjVogA"
            data-item-name="HP laptop">
            Add to cart
        </button>
    )
}
export default SingleProduct