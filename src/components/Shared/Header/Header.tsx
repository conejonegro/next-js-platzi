import Link from "next/link";

export function Header(){
    return(
        <nav>
            <Link href="/">Home</Link>
            <ul>
                <li>
                    <Link href="/tienda">Tienda</Link>
                </li>
                <li>
                    <Link href="/contacto">Contacto</Link>
                </li>
            </ul>
        </nav>
    )
}