import React from "react";
import s from './User.module.css'
import bgImage from '../../../../assets/images/users/user-cover17.jpg'
import userAvatar from '../../../../assets/images/users/userAvatar.png'
import userAvatar2 from '../../../../assets/images/users/userAvatar2.png'
import {AddPropsType} from "./UserContainer";
import ProfileStatus from "./ProfileStatus";
import {Preloader} from "../../../common/Preloader/Preloader";
import {ProfilePageTypes} from "../../../../redux/profileReducer";


type UserPropType = ProfilePageTypes & AddPropsType &
    {
        setNewStatus: (status: string) => void
    }

export default function User(props: UserPropType) {
   const userIcon = props.userId % 4 === 0 ? userAvatar2 : userAvatar

    return (
        <div className={`contentCenter`}>
            <div className={`themeBorder themeBorderPad ${s.wrapper}`}>
                {props.isFetching && <Preloader/>}
                <div className={props.isFetching ? s.opacityFetching : s.notFetching}>
                    <img src={props.photos.large ? props.photos.large : bgImage} className={s.bgImage}
                         alt="user background"/>
                    <h3 className={s.name}>{props.fullName}</h3>
                    <div className={s.content}>
                        <div className={`themeBorder ${s.infoBox}`}>
                            <h4 className={s.boxHeading}>General Info</h4>
                            <p className={s.descWrapper}>
                                <span className={s.desc}>Looking for a job: </span>
                                <span className={s.descRes}>{'Yes I am' }</span>
                            </p>
                            <p className={s.descWrapper}>
                                <span className={s.desc}>Description: </span>
                                <span className={s.descRes}>{props.lookingForAJobDescription}</span>
                            </p>
                            <p className={s.descWrapper}>
                                <span className={s.desc}>Full Name: </span>
                                <span className={s.descRes}>{props.fullName}</span>
                            </p>
                        </div>
                        <div className={s.imageWrapper}>
                            <img src={props.photos.small ? props.photos.small : userIcon} className={s.userImage}
                                 alt={`user name`}/>
                        </div>
                        <div className={`themeBorder ${s.infoBox}`}>
                            <h4 className={s.boxHeading}>Contacts & Socials</h4>
                            <p className={s.descWrapper}>
                                <span className={s.desc}>LinkedIn: </span>
                                <a href={props.contacts.instagram
                                || props.contacts.vk
                                || props.contacts.youtube
                                || props.contacts.website
                                || props.contacts.mainLink
                                || props.contacts.twitter
                                || props.contacts.github
                                || props.contacts.facebook
                                } className={s.descRes}>{props.contacts.instagram
                                || props.contacts.vk
                                || props.contacts.youtube
                                || props.contacts.website
                                || props.contacts.mainLink
                                || props.contacts.twitter
                                || props.contacts.github
                                || props.contacts.facebook
                                || 'No Info'}</a>
                            </p>
                            <p className={s.descWrapper}>
                                <span className={s.desc}>GitHub: </span>
                                <a href={props.contacts.instagram
                                || props.contacts.vk
                                || props.contacts.youtube
                                || props.contacts.website
                                || props.contacts.mainLink
                                || props.contacts.twitter
                                || props.contacts.github
                                || props.contacts.facebook
                                } className={s.descRes}>{props.contacts.github
                                || props.contacts.twitter
                                || props.contacts.mainLink
                                || props.contacts.website
                                || props.contacts.youtube
                                || props.contacts.vk
                                || props.contacts.facebook
                                || props.contacts.instagram
                                || 'No Info'}</a>
                            </p>
                            <p className={s.descWrapper}>
                                <span className={s.desc}>FaceBook: </span>
                                <a href={props.contacts.instagram
                                || props.contacts.vk
                                || props.contacts.youtube
                                || props.contacts.website
                                || props.contacts.mainLink
                                || props.contacts.twitter
                                || props.contacts.github
                                || props.contacts.facebook
                                } className={s.descRes}>{props.contacts.facebook
                                || props.contacts.website
                                || props.contacts.mainLink
                                || props.contacts.twitter
                                || props.contacts.youtube
                                || props.contacts.vk
                                || props.contacts.facebook
                                || props.contacts.instagram
                                || 'No Info'}</a>
                            </p>
                        </div>
                    </div>

                    {
                        props.status && props.userId !== props.idMe &&
                        <div className={s.aboutWrapper}><span className={s.about}>{props.status}</span></div>
                    }
                    {
                        props.userId === props.idMe &&
                        <ProfileStatus status={props.status} setNewStatus={props.setNewStatus} />
                    }

                </div>
            </div>
        </div>
    )
}