import React, { ChangeEvent, useEffect, useState } from "react";

type ProfileStatusPropsType = {
    status: string;
    updateProfileStatus: (status: string) => void;
};

export const ProfileStatus = React.memo((props: ProfileStatusPropsType) => {
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    const activateEditMode = () => setEditMode(true);
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateProfileStatus(status);
    };
    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) =>
        setStatus(event.currentTarget.value);
    return (
        <div>
            {editMode ? (
                <div>
                    <input
                        onChange={onStatusChange}
                        onBlur={deactivateEditMode}
                        value={status}
                        autoFocus
                    />
                </div>
            ) : (
                <div>
                    <b>Status: </b>
                    <span onDoubleClick={activateEditMode}>
            {props.status || "No status"}
          </span>
                </div>
            )}
        </div>
    );
});