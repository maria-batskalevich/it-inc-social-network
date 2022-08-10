import React from 'react'
import s from './Dialogues.module.css'
import {DialogsPropsType} from "./DialoguesContainer";
import {OneDialog} from "./OneDialog/OneDialog";


export function Dialogs(props: DialogsPropsType) {
    return (
        <div className={s.wrapper}>
            {props.dialogs.map( d => <OneDialog id={d.id}
                                                avatar={d.avatar}
                                                name={d.name}
                                                isYour={d.isYour}
                                                lastMessage={d.lastMessage}
                                                key={d.id}
            /> )}
        </div>
    )
}