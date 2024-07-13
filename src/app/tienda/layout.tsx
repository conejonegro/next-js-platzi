
import { getCollections } from "app/services/shopify/getAllCollection"
import Link from "next/link"
import style from "./layout.module.css"

interface Collection  {
    id: number,
    handle: string,
    title: string,
    updated_at: string,
    body_html: string,
    published_at: string,
    sort_order: string,
    template_suffix: string,
    disjunctive: boolean,
    rules: [ [Object] ],
    published_scope: string,
    admin_graphql_api_id: string
}

export default async function CategoriasLayout({ children } : { children : React.ReactNode }){

    const collections = await getCollections()
    //console.log("mi arreglo", collections.smart_collections)

    return(
        <div>
            <nav className={style.collections__container}>
                {collections.smart_collections?.map((collection: Collection) => (
                    <Link href={`/tienda/${collection.handle}`} key={collection.id}>
                        {collection.title}
                    </Link>
            ))}</nav>
            {children}
        </div>
    )
}