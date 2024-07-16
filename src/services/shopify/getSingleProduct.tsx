import { Endpoints } from "./urls";


export interface ProductType {
   id: string;
   title: string;
   description: string;
   price: string;
   image: string;
   handle: string;
   tags: string[];
 }

export const getSingleProduct = async (productID: string) => {
    try {
        const response = await fetch(Endpoints.singleProduct(productID), {
            headers: {
                "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || ""
            }
        })

      const { products } = await response.json();

      const transfomedProduct = products.map((product: any) => {
         return {
            id: product.id,
            gql_id: product.variants[0].admin_graphql_api_id,
            title: product.title,
            description: product.body_html,
            price: product.variants[0].price,
            image: product.images[0].src,
            quantity: product.variants[0].inventory_quantity,
            handle: product.handle,
            tags: product.tags,
            }
      })

      //console.log("mi producto trans", transfomedProduct)
      return transfomedProduct
        
    } catch (error) {
        console.log(error)
    }
 }