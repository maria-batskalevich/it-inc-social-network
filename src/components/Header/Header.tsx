import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean;
    login: string | null;
    logout: () => void
};

export const Header = (props:HeaderPropsType ) => {
  return (
    <header className={s.header}>
      <img
        src={"https://cdn.logo.com/hotlink-ok/logo-social-sq.png"}
        alt={"Logo"}
      />
        <div className={s.loginBlock}>
            {props.isAuth ? (
                <div>
                    {props.login} - <button onClick={props.logout}>Log out</button>
                </div>
            ) : (
                <NavLink to={"/login"}>Log in</NavLink>
            )}
        </div>
    </header>
  );
};
