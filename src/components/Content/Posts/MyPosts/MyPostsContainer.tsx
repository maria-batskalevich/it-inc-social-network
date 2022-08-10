import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {postTypes} from "../../../../redux/PostsReducer";
import {AppStateTypes} from "../../../../redux/store";



type MapStateToPropsType = {
    posts: postTypes[]
}
type MapDispatchToPropsType = {}
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateTypes): MapStateToPropsType => {
    return {
        posts: state.postsPage.posts
    }
}

export default connect(mapStateToProps, {})(MyPosts)