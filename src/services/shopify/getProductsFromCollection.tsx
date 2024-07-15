import { Endpoints } from "./urls";
import { getCollections } from "./getAllCollection";

export const getProductsFromCollection = async (CollectionID: string) => {

    try {
        const response = await fetch(Endpoints.ProductsFromCollection(CollectionID), {
            headers: {
                "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || ""
            }
        })

      const  {products}  = await response.json();
     //console.log("Productos de mi coleccion NEW", data)
      return products
        
    } catch (error) {
        console.log(error)
    }
 }