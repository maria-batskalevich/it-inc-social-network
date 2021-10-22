import React from "react";
import s from '../Dialogues.module.css'
import {NavLink} from "react-router-dom";

export type PropsType = {
    name: string
    id: number
}

export const DialogItem = (props: PropsType) => {
    const path = "/dialogues/" + props.id
    return (
        <div className={s.dialogue}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )

}