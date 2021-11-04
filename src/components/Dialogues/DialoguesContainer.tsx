import React from "react";
import {
    DialogueItemType, MessageType, sendMessage, updateNewMessageText
} from "../../redux/dialoguesReducer";
import {Dialogues} from "./Dialogues";
import {connect} from "react-redux";
import {ReduxRootStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    messages: Array<MessageType>;
    dialogues: Array<DialogueItemType>;
    newMessageText: string;
};
type MapDispatchPropsType = {
    updateNewMessageText: (newMessageText: string) => void;
    sendMessage: () => void;
};
export type DialoguesPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: ReduxRootStateType): MapStatePropsType => {
    return {
        messages: state.dialoguesPage.messages,
        dialogues: state.dialoguesPage.dialogues,
        newMessageText: state.dialoguesPage.newMessageText
    }
}

export const DialoguesContainer = connect(mapStateToProps, {
    updateNewMessageText, sendMessage})(Dialogues)
