let ADD_MESSAGE = 'ADD-MESSAGE';
let UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
    messages: [
        {id: "1", isInbound: true, message: "Hi!"},
        {id: "2", isInbound: false, message: "How are you?"},
        {
            id: "3",
            isInbound: true,
            message: "Who are you Who are you Who are you Who are you Who are you Who are you Who are you Who are you?"
        },
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
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
    return {
        type: ADD_MESSAGE,
    }
}
export const updateNewMessageActionCreator = (message) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        newMessage: message,
    }
}
export default dialogsReducer;