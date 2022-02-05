import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean;
    login: string | null;
    logout: () => void
};

export const Header = React.memo(
    ({ isAuth, login, logout }: HeaderPropsType) => {
        return (
            <header className={s.header}>
                <img
                    src={"https://cdn.logo.com/hotlink-ok/logo-social-sq.png"}
                    alt={"Logo"}
                />
                <div className={s.loginBlock}>
                    {isAuth ? (
                        <div>
                            {login} - <button onClick={logout}>Log out</button>
                        </div>
                    ) : (
                        <NavLink to={"/login"}>Log in</NavLink>
                    )}
                </div>
            </header>
        );
    }
);
