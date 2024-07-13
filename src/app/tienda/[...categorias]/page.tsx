import MainProducts from "app/components/Products/Products";

interface Props {
    params: {
        categorias: string[]
    }
}
export default function Tienda(props: Props){
    console.log(props)
    const { params: {categorias} } = props
    return(
        <section>
            <h1>Pagina de producto: {categorias}</h1>
           
        </section>
    )
}




