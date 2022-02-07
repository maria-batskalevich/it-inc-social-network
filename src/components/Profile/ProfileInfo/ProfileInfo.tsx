import React from "react";
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import {UserProfileType} from "../../../api/API";
import {ProfilePhoto} from "./ProfilePhoto/ProfilePhoto";

type ProfileInfoPropsType = {
    userProfile: UserProfileType;
    status: string;
    updateProfileStatus: (status: string) => void;
    isProfileOwner: boolean;
    updateProfilePhoto: (photo: File) => void;
};

function ProfileStatusWithHooks(props: { updateProfileStatus: (status: string) => void, status: string }) {
    return null;
}

export const ProfileInfo = React.memo(
    ({
         userProfile,
         updateProfileStatus,
         status,
         isProfileOwner,
         updateProfilePhoto,
     }: ProfileInfoPropsType) => {
        if (!userProfile.userId) {
            return <Preloader/>
        } else
            return (
                <div>
                    <div>
                        <img className={s.image}
                             src={"https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"}
                             alt={"background"}
                        />
                    </div>
                    <div className={s.descriptionBlock}>
                        <ProfilePhoto
                            updateProfilePhoto={updateProfilePhoto}
                            isProfileOwner={isProfileOwner}
                            profilePhoto={userProfile.photos.large}
                        />
                    </div>
                    <img alt={'users photo'} src={userProfile.photos.large}/>
                    <ProfileStatusWithHooks
                        status={status}
                        updateProfileStatus={updateProfileStatus}/>
                </div>
            );
    }
)

