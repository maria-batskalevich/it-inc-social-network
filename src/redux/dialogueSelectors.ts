import { DialogueItemType, MessageType } from "./dialoguesReducer";
import {ReduxRootStateType} from "./redux-store";

export const selectMessages = (state: ReduxRootStateType): Array<MessageType> =>
    state.dialoguesPage.messages;
export const selectDialogues = (
    state: ReduxRootStateType
): Array<DialogueItemType> => state.dialoguesPage.dialogues;