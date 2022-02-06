import React from "react";
import {
    DialogueItemType, MessageType, sendMessage
} from "../../redux/dialoguesReducer";
import {Dialogues} from "./Dialogues";
import {connect} from "react-redux";
import {ReduxRootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from 'redux';

type MapStatePropsType = {
    messages: Array<MessageType>;
    dialogues: Array<DialogueItemType>;
    // newMessageText: string;
};
type MapDispatchPropsType = {
    sendMessage: (newMessageBody: string) => void;
};
export type DialoguesPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: ReduxRootStateType): MapStatePropsType => {
    return {
        messages: state.dialoguesPage.messages,
        dialogues: state.dialoguesPage.dialogues,
    }
}

const DialoguesContainer = compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, unknown, ReduxRootStateType>(
        mapStateToProps,
        { sendMessage }),
    withAuthRedirect)
(Dialogues);

export default DialoguesContainer;