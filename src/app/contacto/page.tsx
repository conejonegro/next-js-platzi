import { Metadata } from "next";
import style from "./page.module.css"

export const metadata: Metadata = {
    title: "True Love Design ! Contacto",
    description: "Generated by create next app",
  };

export default function Contacto(){
    
    return(
        <div>
            <h1>Contacto</h1>
            <form action="" className={style.contactForm}>
                <label htmlFor="firtName">First Name</label>
                <input type="text" name="firstName" />
                <label htmlFor="">Last Name</label>
                <input type="text" name="lastName"/>
                <input type="text" name="description" />
                <label htmlFor="">Email</label>
                <input type="email" name="" id="" />

                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}