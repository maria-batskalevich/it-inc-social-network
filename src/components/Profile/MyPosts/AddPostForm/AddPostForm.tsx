import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../../common/FormControls/FormControls";
import {maxLenght20, requiredField} from "../../../../utils/validators/validators";
import s from './AddPostForm.module.css'


export type AddPostFormDataType = {
    newPostText: string;
};

const AddPostForm: React.FC<InjectedFormProps<AddPostFormDataType>
    > = React.memo(({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    placeholder={"Post text"}
                    name={"newPostText"}
                    validate={[requiredField, maxLenght20]}
                />
            </div>
            <div>
                <button className={s.btn}>Add post</button>
            </div>
        </form>
    );
});

export default reduxForm<AddPostFormDataType>({
    form: "profileAddPostForm",
})(AddPostForm);