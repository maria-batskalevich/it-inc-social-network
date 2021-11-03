import { ActionTypes } from "./redux-store";

export type InitialDialoguesStateType = typeof initialDialoguesState;

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

export type DialogueItemType = {
  id: number;
  personName: string;
};
export type MessageType = {
  id: number;
  messageText: string;
};

const initialDialoguesState = {
  dialogues: [
    {id: 1, personName: "1111"},
    {id: 2, personName: "2222"},
    {id: 3, personName: "3333"},
    {id: 4, personName: "4444"},
    {id: 5, personName: "5555"},

  ] as DialogueItemType[],
  messages: [
    {id: 1, messageText: "Hi-Hi-Hi!!!!!!"},
    {id: 2, messageText: "Go to sleep, pls)))))."},
    {id: 3, messageText: "I Love You!!)))"},
    {id: 4, messageText: "Why.....&"},
    {id: 5, messageText: "$500/month is not enough... We can do better!!!!"},

  ] as MessageType[],
  newMessageText: "",
}; // initial state that will be used as dialoguesReducer()'s state default parameter value (only if state wasn't passed into function) !

export const dialoguesReducer = (
  state: InitialDialoguesStateType = initialDialoguesState,
  action: ActionTypes
): InitialDialoguesStateType => {


  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.inputMessageText
      }

    case SEND_MESSAGE:
      return {
        ...state,
        newMessageText: "",
        messages: [...state.messages, {id: 6, messageText: state.newMessageText}]
      }

    default:
      return state;
  }
};

export const updateNewMessageTextAC = (inputMessageText: string) =>
  ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    inputMessageText,
  } as const);
export const sendMessageAC = () =>
  ({
    type: SEND_MESSAGE,
  } as const);
