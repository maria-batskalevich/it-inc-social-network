import React from "react";
import s from "./Dialogues.module.css";
import {DialogItem} from "./DialogueItem/DialogueItem";
import {Message} from "./Message/Message";
import {dialoguesPageType} from "../../redux/state";


type DialoguesPropsType = {
    state: dialoguesPageType;
};

export const Dialogues = (props: DialoguesPropsType) => {

    let dialogsElements = props.state.dialogues.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messageElements = props.state.messages.map(m => <Message messageText={m.messageText} id={m.id}/>)
    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
};


