import React, {Dispatch} from "redux";
import {addPostAC, InitialProfileStateType, updateNewPostTextAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {ReduxRootStateType} from "../../../redux/redux-store";

const mapStateToProps = (state: ReduxRootStateType): InitialProfileStateType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewPostText: (inputPostText: string) => {
            dispatch(updateNewPostTextAC(inputPostText))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
