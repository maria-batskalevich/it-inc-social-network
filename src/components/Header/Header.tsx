// import React from "react";
// import s from "./Header.module.css";
// import { NavLink } from "react-router-dom";
//
// type HeaderPropsType = {
//     isAuth: boolean;
//     login: string | null;
//     logout: () => void
// };
//
// export const Header = React.memo(
//     ({ isAuth, login, logout }: HeaderPropsType) => {
//         return (
//             <header className={s.header}>
//                 <img
//                     src={"https://cdn.logo.com/hotlink-ok/logo-social-sq.png"}
//                     alt={"Logo"}
//                 />
//                 <div className={s.loginBlock}>
//                     {isAuth ? (
//                         <div>
//                             {login} - <button onClick={logout}>Log out</button>
//                         </div>
//                     ) : (
//                         <NavLink to={"/login"}>Log in</NavLink>
//                     )}
//                 </div>
//             </header>
//         );
//     }
// );

import React from "react"
import s from "./Header.module.css"
import AuthContainer from "./Auth/AuthContainer";

export function Header() {
    return (
        <header className={s.header}>
            <div className={s.logoName}>
                <p className={s.logoIT}>IT</p>
                <p className={s.logoIN}>IN</p>
                <p className={s.logoCubator}>CUBATOR </p>
                <span className={s.logoKama}>I T - K A M A S U T R A . C O M</span>
            </div>
            <AuthContainer/>
        </header>
    )
}
