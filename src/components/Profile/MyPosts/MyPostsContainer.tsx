import React from "redux";
import {addPost, deletePost} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {ReduxRootStateType} from "../../../redux/redux-store";
import {selectPosts} from "../../../redux/profileSelectors";

type MapStatePropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchPropsType = {
    addPost: (newPostText: string) => void;
    deletePost: (postId: number) => void;
};
export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: ReduxRootStateType) => {
    return {
        posts: selectPosts(state),
    }
}

export const MyPostsContainer = connect<
    MapStatePropsType,
    MapDispatchPropsType,
    unknown,
    ReduxRootStateType
    >(mapStateToProps, {
    addPost, deletePost
})(MyPosts)
