import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";

export type AddPostFormDataType = {
    newPostText: string;
};

const maxLenght10 = maxLengthCreator(10)

const AddPostForm: React.FC<InjectedFormProps<AddPostFormDataType>> = React.memo((props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    placeholder={"Post text"}
                    name={"newPostText"}
                    validate={[required, maxLenght10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
});

export default reduxForm<AddPostFormDataType>({
    form: "profileAddPostForm",
})(AddPostForm);