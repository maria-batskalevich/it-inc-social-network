import React from "react";
import s from "./Message.module.css";

export type MessagePropsType = {
    id: number;
    messageText: string;
};

export const Message = React.memo(({messageText}: MessagePropsType) => {
    return <div className={s.message}>{messageText}</div>;
});
