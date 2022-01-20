import React from "redux";
import {addPost, InitialProfileStateType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {ReduxRootStateType} from "../../../redux/redux-store";

const mapStateToProps = (state: ReduxRootStateType): InitialProfileStateType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status,
    }
}

export const MyPostsContainer = connect(mapStateToProps, {
    addPost,
})(MyPosts)
