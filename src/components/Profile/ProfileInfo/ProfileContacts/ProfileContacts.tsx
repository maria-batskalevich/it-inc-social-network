import React from "react";
import github from "../../../../assets/images/icons/github.png";
import facebook from "../../../../assets/images/icons/facebook.png";
import instagram from "../../../../assets/images/icons/instagram.png";
import twitter from "../../../../assets/images/icons/twitter.png";
import vk from "../../../../assets/images/icons/vk.png";
import youtube from "../../../../assets/images/icons/youtube.png";
import website from "../../../../assets/images/icons/website.png";
import s from "./ProfileContacts.module.css";
import {ProfileContactsType} from "../../../../api/API";

type ProfileContactsPropsType = {
    profileContacts: ProfileContactsType;
};

export const ProfileContacts = React.memo(
    ({ profileContacts }: ProfileContactsPropsType) => {
        return (
            <div className={s.profileContacts}>
                {profileContacts?.github && (
                    <a href={profileContacts.github}>
                        <img className={s.img} src={github} alt="github" />
                    </a>
                )}
                {profileContacts?.facebook && (
                    <a href={profileContacts.facebook}>
                        <img className={s.img} src={facebook} alt="facebook" />
                    </a>
                )}
                {profileContacts?.instagram && (
                    <a href={profileContacts.instagram}>
                        <img className={s.img} src={instagram} alt="instagram" />
                    </a>
                )}
                {profileContacts?.twitter && (
                    <a href={profileContacts.twitter}>
                        <img className={s.img} src={twitter} alt="twitter" />
                    </a>
                )}
                {profileContacts?.vk && (
                    <a href={profileContacts.vk}>
                        <img className={s.img} src={vk} alt="vk" />
                    </a>
                )}
                {profileContacts?.youtube && (
                    <a href={profileContacts.youtube}>
                        <img className={s.img} src={youtube} alt="youtube" />
                    </a>
                )}
                {profileContacts?.mainLink && (
                    <a href={profileContacts.mainLink}>
                        <img className={s.img} src={website} alt="website" />
                    </a>
                )}
            </div>
        );
    }
);