import React from 'react'
import s from './Messages.module.css'
import {OneMessage} from "./OneMessage/OneMessage";
import {MessagesPropsType} from "./MessagesContainer";
import SendMessageContainer from "./SendMessage/SendMessageContainer";
import {LeftSide} from "../../LeftSide/LeftSide";


export function Messages(props: MessagesPropsType) {
    return (
        <div className={`wrapperWithWidgets`}>
            <LeftSide/>
            <div className={`innerCenter`}>
                <div className={'themeBorder themeBorderPad'}>
                    <h3>Messages</h3>
                    <div className={s.center}>
                        {props.messages.map(m => <OneMessage key={m.id} id={m.id} avatar={m.avatar} message={m.message}
                                                             isYou={m.isYou}/>)}
                    </div>
                    <SendMessageContainer/>
                </div>
            </div>
        </div>
    );
}