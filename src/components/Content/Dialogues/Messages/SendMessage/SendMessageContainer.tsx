import {SendMessage} from "./SendMessage";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {addMessageAC} from "../../../../../redux/dialoguesReducer";


export type SendMessagePropsType2 = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {}

type MapDispatchToPropsType = {
    onMessageSend: (newMessage: string) => void
}

const mapStateToProps = (): MapStateToPropsType => {
    return {}
}


const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onMessageSend: (newMessage: string) => {
            dispatch(addMessageAC(newMessage.trim()))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendMessage)