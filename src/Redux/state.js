
// let state = {
//     profilePage: {
//         posts: [
//             {id: "1", message: "Hi!", likesCount: 5, dislikesCount: 0},
//             {id: "2", message: "It's my first message", likesCount: 10, dislikesCount: 1},
//         ],
//         newPostText: 'JS',
//     },
//     dialogsPage: {
//         messages: [
//             {id: "1", isInbound: true, message: "Hi!"},
//             {id: "2", isInbound: false, message: "How are you?"},
//             {
//                 id: "3",
//                 isInbound: true,
//                 message: "Who are you Who are you Who are you Who are you Who are you Who are you Who are you Who are you Who are you Who are you Who are you Who are you Who are you Who are you?"
//             },
//             {id: "4", isInbound: false, message: "Where are you?"},
//             {id: "5", isInbound: true, message: "Bye-bye!"},
//         ],
//         // newMessageText:{isInbound: false, message: ""},
//         newMessageText: "hello",
//         dialogs: [
//             {id: "1", name: "Alex"},
//             {id: "2", name: "John"},
//             {id: "3", name: "Jack"},
//             {id: "4", name: "Miranda"},
//             {id: "5", name: "Jenifer"},
//             {id: "6", name: "Oleksandr"},
//             {id: "7", name: "El-Sancho"},
//             {id: "8", name: "Sashok"},
//             {id: "9", name: "Vinson"},
//             {id: "10", name: "Joey"},
//         ],
//     },
//     sidebar: {
//         friends: [
//             {id: "1", name: "Alex"},
//             {id: "2", name: "John"},
//             {id: "3", name: "Jack"},
//             {id: "4", name: "Miranda"},
//             {id: "5", name: "Jenifer"},
//             {id: "6", name: "Alex"},
//             {id: "7", name: "John"},
//             {id: "8", name: "Jack"},
//         ]
//     },
// }
//
// export let addMessage = () => {
//     let newMessage = {
//         id: "6", isInbound: false, message: state.dialogsPage.newMessageText,
//     };
//     state.dialogsPage.messages.push(newMessage);
//     state.dialogsPage.newMessageText = '';
//     rerenderEntireTree(state);
// }
// export let updateNewMessage = (newMessage) => {
//     state.dialogsPage.newMessageText = newMessage;
//     rerenderEntireTree(state);
// }
//
//
// export let addPost = () => {
//     let newPost = {
//         id: "1", message: state.profilePage.newPostText, likesCount: 7, dislikesCount: 2
//     };
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = '';
//     rerenderEntireTree(state);
// }
// export let updateNewPostText = (newText) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state);
// }
// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// }
//
// export default state;
import profile from "../Components/Profile/Profile";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
let store = {
    dialogs: {
        state: {
            dialogsPage: {
                messages: [
                    {id: "1", isInbound: true, message: "Hi!"},
                    {id: "2", isInbound: false, message: "How are you?"},
                    {id: "3", isInbound: true, message: "Who are you Who are you Who are you Who are you Who are you Who are you Who are you Who are you?"},
                    {id: "4", isInbound: false, message: "Where are you?"},
                    {id: "5", isInbound: true, message: "Bye-bye!"},
                ],
                newMessageText: "",
                dialogs: [
                    {id: "1", name: "Alex"},
                    {id: "2", name: "John"},
                    {id: "3", name: "Jack"},
                    {id: "4", name: "Miranda"},
                    {id: "5", name: "Jenifer"},
                    {id: "6", name: "Oleksandr"},
                    {id: "7", name: "El-Sancho"},
                    {id: "8", name: "Sashok"},
                    {id: "9", name: "Vinson"},
                    {id: "10", name: "Joey"},
                ],
            },
        },
        // addMessage() {
        //     let newMessage = {
        //         id: "6", isInbound: false, message: this.state.dialogsPage.newMessageText,
        //     };
        //     this.state.dialogsPage.messages.push(newMessage);
        //     this.state.dialogsPage.newMessageText = '';
        //     this._callSubscriber(this.state);
        // },
        // updateNewMessage(newMessage) {
        //     this.state.dialogsPage.newMessageText = newMessage;
        //     this._callSubscriber(this.state);
        // },
        dispatch(action) {

            this.state.dialogsPage = dialogsReducer(this.state.dialogsPage, action);
            this._callSubscriber(this.state);
        },
        _callSubscriber(){},
    },
    profile: {
        state: {
            profilePage: {
                posts: [
                    {id: "1", message: "Hi!", likesCount: 5, dislikesCount: 0},
                    {id: "2", message: "It's my first message", likesCount: 10, dislikesCount: 1},
                ],
                newPostText: 'JS',
            },

        },
        // addPost() {
        //     let newPost = {
        //         id: "1", message: this.state.profilePage.newPostText, likesCount: 7, dislikesCount: 2
        //     };
        //     this.state.profilePage.posts.push(newPost);
        //     this.state.profilePage.newPostText = '';
        //     this._callSubscriber(this.state);
        // },
        // updateNewPostText(newText) {
        //     this.state.profilePage.newPostText = newText;
        //     this._callSubscriber(this.state);
        // },
        dispatch(action) {

            this.state.profilePage = profileReducer(this.state.profilePage, action);
            this._callSubscriber(this.state);
        },
        _callSubscriber() {},
    },
    sidebar: {
        friends: [
            {id: "1", name: "Alex"},
            {id: "2", name: "John"},
            {id: "3", name: "Jack"},
            {id: "4", name: "Miranda"},
            {id: "5", name: "Jenifer"},
            {id: "6", name: "Alex"},
            {id: "7", name: "John"},
            {id: "8", name: "Jack"},
        ],
        dispatch(action) {
            this.state.friends = sidebarReducer(this.state.friends, action);
            this._callSubscriber(this.state);
        },
        _callSubscriber() {},
    },

    subscribe(observer){
        for (let moduleName in this) {
            let module = this[moduleName];
            if (typeof module._callSubscriber !== "undefined"){
                module._callSubscriber = observer;
            }
        }
    },
};

export default store;