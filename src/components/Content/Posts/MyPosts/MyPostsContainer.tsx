import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {postTypes} from "../../../../redux/PostsReducer";
import {AppStateTypes} from "../../../../redux/store";
import {UserType} from "../../../../redux/usersReducer";



type MapStateToPropsType = {
    posts: postTypes[]
    users: UserType[]
}
type MapDispatchToPropsType = {}
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateTypes): MapStateToPropsType => {
    return {
        posts: state.postsPage.posts,
        users: state.usersPage.users
    }
}

export default connect(mapStateToProps, {})(MyPosts)