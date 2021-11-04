import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import {AuthType, InitialUsersStateType} from "../../redux/authReducer";

type HeaderPropsType = {
    isAuth: boolean;
    login: string | null;
    setAuthUserData: (data: AuthType) => void;
};

export const Header = (props:HeaderPropsType ) => {
  return (
    <header className={s.header}>
      <img
        src={"https://cdn.logo.com/hotlink-ok/logo-social-sq.png"}
        alt={"Logo"}
      />
        <div className={s.loginBlock}>
            {props.isAuth? props.login
            :<NavLink to={'/login'}>Login</NavLink> }

        </div>
    </header>
  );
};
