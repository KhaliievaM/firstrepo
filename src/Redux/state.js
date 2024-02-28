let rerenderEntireTree = () => {

}
let state = {
    profilePage: {
        posts: [
            {id: "1", message: "Hi!", likesCount: 5, dislikesCount: 0},
            {id: "2", message: "It's my first message", likesCount: 10, dislikesCount: 1},
        ],
        newPostText: 'JS',
    },
    dialogsPage: {
        messages: [
            {id: "1", isInbound: true, message: "Hi!"},
            {id: "2", isInbound: false, message: "How are you?"},
            {
                id: "3",
                isInbound: true,
                message: "Who are you Who are you Who are you Who are you Who are you Who are you Who are you Who are you Who are you Who are you Who are you Who are you Who are you Who are you?"
            },
            {id: "4", isInbound: false, message: "Where are you?"},
            {id: "5", isInbound: true, message: "Bye-bye!"},
        ],
        // newMessageText:{isInbound: false, message: ""},
        newMessageText: "hello",
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
        ]
    },
}

export let addMessage = () => {
    let newMessage = {
        id: "6", isInbound: false, message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}
export let updateNewMessage = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    rerenderEntireTree(state);
}


export let addPost = () => {
    let newPost = {
        id: "1", message: state.profilePage.newPostText, likesCount: 7, dislikesCount: 2
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;