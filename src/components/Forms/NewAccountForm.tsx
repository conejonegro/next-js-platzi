"use client";
import { useState } from "react";
import style from "./NewAccount.module.css"
import { handleCreateUser } from "app/actions";

export const NewAccountForm = () => {

  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    console.log("event target",event)
    await handleCreateUser(formData)
  } 

  return (
    <div className={style.NewAccountForm}  >
      <h1 className={style.NewAccountForm__title}>New Account</h1>
      <form className={style.NewAccountForm__form} onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="Name" disabled={loading} />
        <input type="text" name="lastName" placeholder="Lastname" disabled={loading} />
        <input type="text" name="email" placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}" disabled={loading} />
        <input type="text" name="phone" placeholder="phone number" pattern="^[0-9]*$" disabled={loading} />
        <input type="password" name="password" placeholder="password" disabled={loading} />
        <input type="password" name="password_confirmation" placeholder="re-type password" disabled={loading} />
        <input type="submit" name="submit" value="Crear cuenta" disabled={loading} />
      </form>
      {errors.length > 0 && 
        <div>
          {errors.map((error, index) => {
            return <p key={index} className={style.NewAccountForm__error}>{error}</p>
          })}
        </div>
      }
    </div>
  );
}