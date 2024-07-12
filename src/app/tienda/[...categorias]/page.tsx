interface Props {
    params: {
        categorias: string
    }
}


export default function Categorias(props: Props ){
   
    console.log(props)
    const { params: {categorias} } = props

    return(
        <h1>Categorias reales: {categorias}</h1>
    )
}