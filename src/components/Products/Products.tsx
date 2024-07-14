import Image from "next/image";
import style from "./products.module.css"
import { Endpoints } from "app/services/shopify/urls";
import { getProducts }  from "app/services/shopify/getAllProducts";
import Link from "next/link";

 export default async function MainProducts(){
   
    
    const products = await getProducts()
   
    return(
        <div className={style.main_product__container}>
            {products?.map((product) => {
              return(
                <Link href={`tienda/${product.handle}`}>

                    <div className={style.product__container}>
                        <h5>{product.title}</h5>
                        <Image src={product.image.src} width={500} height={500} alt={product.title} className={style.image} />
                    </div>
                    
                </Link>
              )  
            })}
            
        </div>
    )
 }