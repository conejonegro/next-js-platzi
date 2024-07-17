import { getSingleProduct } from "app/services/shopify/getSingleProduct";
import Image from "next/image";
import type { Metadata } from "next";

interface propsType {
   params: {
      myproduct: string
   },
   searchParams: {
      id: string,
      color: string
   }
}

export async function generateMetadata(props: propsType){
   const { searchParams: { id } } = props;
   const products = await getSingleProduct(id)
   console.log("MIS PRODUCTOS METADATA", products)
   const product = products[0]

   return {
      title: product.title,
      description: product.description
    }

}

export default async function MyProductPage(props: propsType){

   console.log(props)
   const { searchParams: { id, color } } = props
   const { params: { myproduct } } = props
   const products = await getSingleProduct(id)
   //console.log("mis productos desde la pagina single product", products)
   const product = products[0]
   //console.log("producto unico", product)
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