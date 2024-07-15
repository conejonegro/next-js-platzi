import { Endpoints } from "./urls";

export const getProducts = async () => {
    try {
        const response = await fetch(Endpoints.allProducts, {
            headers: {
                "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || ""
            }
        })

      const { products } = await response.json();
      //console.log("mis productos", data.products)
      return products
        
    } catch (error) {
        console.log(error)
    }
 }