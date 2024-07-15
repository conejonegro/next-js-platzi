import { Endpoints } from "./urls";

export const getCollections = async () => {
    try {
        const response = await fetch(Endpoints.allCollections, {
            headers: {
                "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || ""
            }
        })

      const { smart_collections } = await response.json();
      //console.log("mis colecciones", smart_collections)
      return smart_collections
        
    } catch (error) {
        console.log(error)
    }
 }