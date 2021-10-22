import {reRenderApp} from "../render";

export type PostType = {
    id: number
    postText: string
    likesCount: number
}
export type DialogueType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    messageText: string
}
export type ProfilePageType = {
    posts: PostType[]
}
export type dialoguesPageType = {
    dialogues: DialogueType[]
    messages: MessageType[]
}
export type FriendsType = {
    id: number
    name: string
}
export type SidebarPageType = {
    friends: FriendsType[]
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialoguesPage: dialoguesPageType
    sidebar: SidebarPageType
}

export const state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, postText: 'Hi! My name is Maria', likesCount: 15},
            {id: 2, postText: `It's my first post))`, likesCount: 20},
        ]
    },
    dialoguesPage: {
        dialogues: [
            {id: 1, name: 'Maria'},
            {id: 2, name: 'Aleksandr'},
            {id: 3, name: 'Natali'},
            {id: 4, name: 'Olga'},
            {id: 5, name: 'Andrei'},
        ],
        messages: [
            {id: 1, messageText: 'Hi!'},
            {id: 2, messageText: 'How are you?'},
            {id: 3, messageText: 'I am fine!'},
            {id: 4, messageText: 'Thanks!'},
        ],
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Aleksandr'},
            {id: 1, name: 'Natalia'},
            {id: 1, name: 'Olga'},
        ]
    }
}

export const addPost = (postText: string) => {
    const newPost: PostType = {
        id: 3,
        postText,
        likesCount: 0,
    };
    state.profilePage.posts.unshift(newPost);
    reRenderApp(state);
};
