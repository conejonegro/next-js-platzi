"use client"
import { handleLogin } from "app/actions";
import style from "./LoginForm.module.css";

export const LoginForm = () => {

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.target as HTMLFormElement);
    event.preventDefault();
    await handleLogin(formData);
  }

  return (
    <div className={style.NewAccountForm}  >
      <h1 className={style.NewAccountForm__title}>Login</h1>
      <form onSubmit={handleSubmit} className={style.NewAccountForm__form}>
        <input type="text" name="email" placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
        <input type="password" name="password" placeholder="password" />
        <input type="submit" name="submit" value="Login" />
      </form>
    </div>
  );
}