import {PostType, UserProfileType} from "./profileReducer";
import {ReduxRootStateType} from "./redux-store";

export const selectUserProfile = (state: ReduxRootStateType): UserProfileType =>
    state.profilePage.userProfile;
export const selectStatus = (state: ReduxRootStateType): string =>
    state.profilePage.status;
export const selectPosts = (state: ReduxRootStateType): Array<PostType> =>
    state.profilePage.posts;