import Link from "next/link";
import style from "./Header.module.css";
import { validateAccessToken } from "app/utils/auth/validateAccessToken";
import { ShoppingCart } from "../ShoppingCart";

export async function Header(){
    const customer = await validateAccessToken()

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
                <li>
                    <Link href="/login">Login</Link>
                </li>
                <li>
                    <Link href="/registro">Registro</Link>
                </li>
            </ul>
            <div className={style.loggedUser_container}>
            { customer?.firstName? <p className={style.logged_user}>Hola {customer.firstName}</p> : <Link href="/login">Login</Link> }
            <ShoppingCart />
            </div>

        </nav>
    )
}