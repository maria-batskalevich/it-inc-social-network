import {connect} from "react-redux";
import {compose} from "redux";
import React from "react";
import {Dialogs} from "./Dialogues";
import {dialogTypes} from "../../../redux/dialoguesReducer";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {AppStateTypes} from "../../../redux/store";


type MapStateToPropsType = {
    dialogs: dialogTypes[]
}
type MapDispatchToPropsType = {

}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateTypes): MapStateToPropsType => {
    return {
        dialogs: state.dialoguesPage.dialogs
    }
}
const mapDispatchToProps = (): MapDispatchToPropsType => {
    return {}
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)