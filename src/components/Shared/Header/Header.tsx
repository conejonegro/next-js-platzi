import Link from "next/link";
import style from "./Header.module.css";

export function Header(){

    return(
        <nav className={style.nav}>
           
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
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