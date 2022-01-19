import React, {ChangeEvent, useState} from "react";
// import s from "./ProfileInfo.module.css";

type ProfileStatusPropsType = {
    status: string;
    updateUserStatus: (status: string) => void;
};
type ProfileStatusStateType = {
    editMode: boolean;
    status: string;
};

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state: ProfileStatusStateType = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })

    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(
        prevProps: ProfileStatusPropsType,
        prevState: ProfileStatusStateType) {

        if(prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode &&
                <div>
                    <input
                        onChange={this.onStatusChange}
                        autoFocus
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}/>
                </div>
                }
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>
                        {this.props.status || 'No status'}
                    </span>
                </div>

                }
            </div>
        )
    }

}





