import React from "react";
import s from "./ProfileInfo.module.css";
import { ProfilePropsType as ProfileInfoPropsType } from "../Profile";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if(!props.userProfile.userId) {
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
          Ava + description</div>
        <img src={props.userProfile.photos.large} />
        <ProfileStatus
            status={props.status}
            updateUserStatus={props.updateUserStatus}/>
    </div>
  );
}

