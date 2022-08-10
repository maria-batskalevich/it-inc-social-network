import {connect} from "react-redux";
import {Messages} from "./Messages";
import {compose} from "redux";
import React from "react";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {AppStateTypes} from "../../../../redux/store";
import {messageTypes} from "../../../../redux/dialoguesReducer";


type mapStateToPropsType = {
    messages: messageTypes[]
}
type mapDispatchToPropsType = {

}
export type MessagesPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateTypes): mapStateToPropsType => {
    return {
        messages: state.dialoguesPage.messages
    }
}
const mapDispatchToProps = (): mapDispatchToPropsType => {
    return {

    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages)