import React from "react";
import s from "./Dialogues.module.css";
import {
    DialogueItem,
} from "./DialogueItem/DialogueItem";
import {Message} from "./Message/Message";
import AddMessageForm, {AddMessageFormDataType} from "./AddMessageForm/AddMessageForm";
import {DialoguesPropsType} from "./DialoguesContainer";

export const Dialogues = React.memo((props: DialoguesPropsType) => {

        const dialogueElements = props.dialogues.map((dialogue) => (
            <DialogueItem
                key={dialogue.id}
                personName={dialogue.personName}
                id={dialogue.id}/>
        ));

        const messageElements = props.messages.map((message) => (
            <Message
                key={message.id}
                messageText={message.messageText}
                id={message.id}/>
        ));

        const addNewMessage = (values: AddMessageFormDataType) => {
            props.sendMessage(values.newMessageText);
        };

        return (
            <div className={s.dialoguesPage}>
                <div className={s.dialoguesList}>{dialogueElements}</div>
                <div className={s.messagesList}>
                    <div>{messageElements}</div>
                    <div>
                        <AddMessageForm onSubmit={addNewMessage}/>
                    </div>
                </div>
            </div>
        );
    }
)


