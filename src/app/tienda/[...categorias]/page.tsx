import MainProducts from "app/components/Products/Products";
import { getCollections, ShopifyCollection } from "app/services/shopify/getAllCollection";
import { getProducts, ShopifyProduct  } from "app/services/shopify/getAllProducts";
import { getProductsFromCollection } from "app/services/shopify/getProductsFromCollection";
import Link from "next/link";
import style from "./page.module.css";
import Image from "next/image";
import type { Metadata } from "next";
interface Props {
    params: {
        categorias: string[]
    }
}

export async function generateMetadata(props: Props){

    const { params: { categorias } } = props
    const collections = await getCollections()
    const selectedCollection = collections.find((collection: ShopifyCollection ) => collection.handle === categorias[0])

    return {
        title: selectedCollection.title + " | True Love Design",
        description: selectedCollection.rules[0].condition
      }

}
export default async function Categoria(props: Props){

    const { params: { categorias } } = props
    //console.log(categorias)
    let products = []
    const collections = await getCollections();
    const selectedCollectionID = collections.find((collection: ShopifyCollection) => collection.handle === categorias[0]).id
    //const productsFromCollection = await getProductsFromCollection(selectedCollectionID);
    //console.log("MIS COLECCIONES",collections);
    //console.log("Productos en la coleccion", productsFromCollection);
    //console.log("selectedCollectionmi", selectedCollectionID)
    if(selectedCollectionID){
        products = await getProductsFromCollection(selectedCollectionID);
    }
    else{
        console.log("No se encontro la coleccion")
        products = await getProducts()
    }
       console.log("productos de la coleccions", products)
    return(
        <section>
            <h1>productos filtrado: {categorias}</h1>
            <div className={style.main_product__container}>
                {products?.map((product: ShopifyProduct) => {
                return(
                    <Link href={`/product/${product.handle}?id=${product.id}`} key={product.id}>
                        <div className={style.product__container}>
                            <h5>{product.title}</h5>
                            <Image src={product.image.src} width={500} height={500} alt={product.title} className={style.image} />
                        </div>
                    </Link>
                )})}
            </div>
        </section>
    )
}