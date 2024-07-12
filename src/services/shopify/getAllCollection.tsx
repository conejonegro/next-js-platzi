import { Endpoints } from "./urls";

export const getCollections = async () => {
    try {
        const response = await fetch(Endpoints.allCollections, {
            headers: {
                "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || ""
            }
        })

      const data = await response.json();
      console.log("mis colecciones", data)
      return data
        
    } catch (error) {
        console.log(error)
    }
 }