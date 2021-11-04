import React from "redux";
import {addPost, InitialProfileStateType, updateNewPostText} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {ReduxRootStateType} from "../../../redux/redux-store";

const mapStateToProps = (state: ReduxRootStateType): InitialProfileStateType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        userProfile: state.profilePage.userProfile
    }
}

export const MyPostsContainer = connect(mapStateToProps, {
    updateNewPostText,
    addPost,
})(MyPosts)
