import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AddPostForm} from "./AddPostForm";
import {addPostAC, newPostTextAC} from "../../../../redux/PostsReducer";


type MapStateToPropsType = {
}
type MapDispatchToPropsType = {
    addPost: (newPost: string) => void
    onPostChange: (newValue: string) => void
}
export type ProfileTopPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (): MapStateToPropsType => {
    return {}
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPost: string) => {
            dispatch(addPostAC(newPost))
        },
        onPostChange: (newPost: string) => {
            dispatch(newPostTextAC(newPost))
        }
    }
}

const AddPostFormContainer = connect(mapStateToProps, mapDispatchToProps)(AddPostForm)
export default AddPostFormContainer