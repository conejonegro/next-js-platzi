import MainProducts from "app/components/Products/Products";
import { getCollections } from "app/services/shopify/getAllCollection";
import { getProducts } from "app/services/shopify/getAllProducts";
import { getProductsFromCollection } from "app/services/shopify/getProductsFromCollection";
import Link from "next/link";
import style from "./page.module.css";
import Image from "next/image";

interface Props {
    params: {
        categorias: string[]
    }
}
export default async function Categoria(props: Props){

    const { params: { categorias } } = props
    let products = []
    const collections = await getCollections();
    const selectedCollectionID = collections.find((collection) => collection.handle === categorias[0]).id
    //const productsFromCollection = await getProductsFromCollection(selectedCollectionID);
    //console.log("MIS COLECCIONESo ",collections);
    //console.log("Productos en la coleccion", productsFromCollection);
    
    //console.log("selectedCollectionmi", selectedCollectionID)

    if(selectedCollectionID){
        products = await getProductsFromCollection(selectedCollectionID);
    }
    else{
        console.log("No se encontro la coleccion")
        products = await getProducts()
    }
       

    //console.log("miproducts", products)

    
    return(
        <section>
            <h1>productos filtrado: {categorias}</h1>
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
           
        </section>
    )
}




