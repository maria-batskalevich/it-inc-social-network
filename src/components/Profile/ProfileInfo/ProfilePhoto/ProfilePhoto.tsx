import React, { ChangeEvent } from "react";
import s from "./ProfilePhoto.module.css";
import userAva from "../../../../assets/images/userAvatar.png";

type ProfilePhotoPropsType = {
    profilePhoto?: string;
    isProfileOwner: boolean;
    updateProfilePhoto: (photo: File) => void;
};

export const ProfilePhoto = React.memo(
    ({
         isProfileOwner,
         profilePhoto,
         updateProfilePhoto,
     }: ProfilePhotoPropsType) => {
        const onUserPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
            event.target.files &&
            event.target.files.length &&
            updateProfilePhoto(event.target.files[0]);
        };

        return (
            <div>
                <img
                    className={s.userPhoto}
                    src={profilePhoto || userAva}
                    alt={"User"}
                />
                {isProfileOwner && (
                    <input
                        type={"file"}
                        onChange={onUserPhotoSelected}
                        className={s.setUserPhoto}
                    />
                )}
            </div>
        );
    }
);