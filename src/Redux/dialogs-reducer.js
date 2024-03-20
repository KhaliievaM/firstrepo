let ADD_MESSAGE = 'ADD-MESSAGE';
let UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const dialogsReducer = (state, action) => {
    switch (action.type){
        case ADD_MESSAGE :
            let newMessage = {
                id: "6", isInbound: false, message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE :
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
}
export const addMessageActionCreator = () => {
    return{
        type: ADD_MESSAGE,
    }
}
export const updateNewMessageActionCreator = (message) => {
    return{
        type: UPDATE_NEW_MESSAGE,
        newMessage: message,
    }
}
export default dialogsReducer;