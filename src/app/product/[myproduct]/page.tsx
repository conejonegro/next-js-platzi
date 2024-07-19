import { getSingleProduct } from "app/services/shopify/getSingleProduct";
import Image from "next/image";
import type { Metadata } from "next";
import CategoriasLayout from "app/app/tienda/layout";
import style from "./page.module.css"
import { ProductViewItemsOrder } from "app/components/Products/productsViewItemsOrder";

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
      <> 
         <CategoriasLayout children />
         <main className={style.ProductView}>
      <section className={style.ProductView__images}>
        <Image
          loading="eager"
          src={product.image}
          width={500}
          height={500}
          quality={80}
          alt={product.title}
        />
      </section>
      <section className={style.ProductView__info}>
        <h1 className={style.ProductView__info__title}>{product.title}</h1>
        <p className={style.ProductView__info__category}>{product.tags}</p>
       <p>{product.description}</p>
       
        <span className={style.ProductView__info__price}>
          $ {product.price}
        </span>
        {<ProductViewItemsOrder maxQuantity={product.quantity} product={product} />}
      </section>
    </main>
      </>
   )
}