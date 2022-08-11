import React from "react";
import s from './AddPostForm.module.css'
import {ProfileTopPropsType} from "./AddPostFormContainer";
import {KeyboardEvent} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import maria2 from '../../../../assets/images/users/maria2.jpg'


export type AddPostFormDataType = {
    newPost: string;
};

export function AddPostForm (props: ProfileTopPropsType){

        const {register, handleSubmit, setValue} = useForm<AddPostFormDataType>();
        const onSubmit: SubmitHandler<AddPostFormDataType> = data => {
            props.addPost(data.newPost)
            setValue('newPost', '')
        }

        const onEnterPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
            if(event.shiftKey || event.ctrlKey) return
            if(event.key === 'Enter') {
                handleSubmit(onSubmit)()
                event.preventDefault()
            }
        }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={`${s.wrapper} themeBorder`}>
            <h3 className={s.heading}>Create Post</h3>
            <div className={s.main}>
                <div ><img className={s.avatar} src={maria2} alt="avatar"/></div>
                <textarea {...register("newPost")}
                          onKeyPress={onEnterPress}
                          className={s.text}
                          placeholder="Share something what you are thinking about..."/>
            </div>
            <button className={s.submit}>Post</button>
        </form>
    )
    }


