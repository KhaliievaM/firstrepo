import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    let addNewMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    let onMessageChange = (messages) => {
        let action = updateNewMessageActionCreator(messages);
        props.store.dispatch(action);
    }
    return (<Dialogs addNewMessage={addNewMessage} onMessageChange={onMessageChange}
                     dialogsPage={state}/>)
}
export default DialogsContainer;