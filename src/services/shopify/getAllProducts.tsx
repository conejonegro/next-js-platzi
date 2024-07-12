import { Endpoints } from "./urls";

export const getProducts = async () => {
    try {
        const response = await fetch(Endpoints.allProducts, {
            headers: {
                "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || ""
            }
        })

      const data = await response.json();
      //console.log("mis productos", data.products)
      return data.products
        
    } catch (error) {
        console.log(error)
    }
 }