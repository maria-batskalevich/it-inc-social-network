import React from "react";
import s from "./Message.module.css";

export type MessagePropsType = {
  id: number;
  messageText: string;
};

export const Message = (props: MessagePropsType) => {
  return <div className={s.message}>{props.messageText}</div>;
};
