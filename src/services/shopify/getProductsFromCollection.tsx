import { Endpoints } from "./urls";
import { getCollections } from "./getAllCollection";

export const getProductsFromCollection = async (CollectionID: string) => {
   const { smart_collections } = await getCollections();

    try {
        const response = await fetch(Endpoints.ProductsFromCollection(`${smart_collections[0].CollectionID}`), {
            headers: {
                "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || ""
            }
        })

      const { products } = await response.json();
      console.log("Productos de mi coleccion", products)
      return products
        
    } catch (error) {
        console.log(error)
    }
 }