"use client"

import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import style from "./ShoppingCart.module.css"
import { useShoppingCart } from "app/hooks/useShoppingCart"
export function ShoppingCart(){

   const { cart } = useShoppingCart();

   return(
      <div>
        { <button className={style.button_counter}>
            <span className={style.counter}>{cart.length}</span>
            <FaShoppingCart />
         </button>}
      </div>
   )
}