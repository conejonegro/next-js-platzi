import { getSingleProduct } from "app/services/shopify/getSingleProduct";
import Image from "next/image";

interface propsType {
   params: {
      myproduct: string
   },
   searchParams: {
      id: string,
      color: string
   }
}

export default async function MyProductPage(props: propsType){

   console.log(props)
   const { searchParams: { id, color } } = props
   const { params: { myproduct } } = props
   const products = await getSingleProduct(id)
   const product = products[0]
   console.log("producto unico", product)
   return(
      <div>
         <h1> {product.title}  </h1>
         <p>{product.description}  </p>
         <div>Precio: ${product.price}</div>
         <div>Cantiodad: {product.quantity}</div>
         <Image src={product.image} alt={product.title} width={500} height={500} />    
      </div>
   )
}