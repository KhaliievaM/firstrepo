let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState = {
    posts: [
        {id: "1", message: "Hi!", likesCount: 5, dislikesCount: 0},
        {id: "2", message: "It's my first message", likesCount: 10, dislikesCount: 1},
    ],
    newPostText: 'JS',
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            let newPost = {
                id: "1", message: state.newPostText, likesCount: 7, dislikesCount: 2
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT :
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}
export const updateNewPostTextPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}
export default profileReducer;