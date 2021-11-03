import React from "react";
import {
    InitialDialoguesStateType,
    sendMessageAC,
    updateNewMessageTextAC,
} from "../../redux/dialoguesReducer";
import {Dialogues} from "./Dialogues";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {ReduxRootStateType} from "../../redux/redux-store";


const mapStateToProps = (state: ReduxRootStateType): InitialDialoguesStateType => {
    return {
        messages: state.dialoguesPage.messages,
        dialogues: state.dialoguesPage.dialogues,
        newMessageText: state.dialoguesPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessageText: (newMessageText: string) => {
            dispatch(updateNewMessageTextAC(newMessageText))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

export const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues)
