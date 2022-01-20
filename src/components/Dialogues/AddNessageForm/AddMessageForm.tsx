import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControls/FormControls";
import {maxLenght100, required} from "../../../utils/validators/validators";

export type AddMessageFormDataType = {
    newMessageText: string;
};



const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormDataType>> = React.memo((props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={"newMessageText"}
                    placeholder={"Message text"}
                    validate={[required, maxLenght100]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
});

export default reduxForm<AddMessageFormDataType>({
    form: "dialogueAddMessageForm",
})(AddMessageForm);