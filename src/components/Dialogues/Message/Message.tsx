import React from "react";
import s from '../Dialogues.module.css'
import {MessageType as MessagePropsType} from "../../../redux/state";


export const Message = (props: MessagePropsType) => {
    return <div className={s.dialog}>{props.messageText}</div>
}

