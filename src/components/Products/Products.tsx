import Image from "next/image";
import style from "./products.module.css"

const getProducts = async () => {
    try {
        const response = await fetch(process.env.SHOPIFY_HOST_NAME+"/admin/api/2023-10/products.json", {
            headers: {
                "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || ""
            }
        })
      const data = await response.json();
      console.log("mis productos", data.products)
      return data.products
        
    } catch (error) {
        console.log(error)
    }
 }

 export default async function MainProducts(){
    const products = await getProducts()
    return(
        <div className={style.main_product__container}>
            {products.map((product) => {
              return(
                <div className={style.product__container}>
                    <h5>{product.title}</h5>
                    <Image src={product.image.src} width={500} height={500} alt={product.title} className={style.image} />
                </div>
              )  
            })}
            
        </div>
    )
 }