import React from "react";
import obj from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreator} from "../../Redux/dialogs-reducer";
import {updateNewMessageActionCreator} from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {
    let newMessageElement = React.createRef();
    // debugger
    let addNewMessage = () => {
        props.dialogs.dispatch(addMessageActionCreator());
    }
    let onMessageChange = (e) => {
        let message = e.target.value;// let message = newMessageElement.current.value;
        let action = updateNewMessageActionCreator(message);
        props.dialogs.dispatch(action);
    }
    let dialogsElement = props.dialogs.state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogs.state.dialogsPage.messages.map(m => <Message message={m.message}
                                                                                      isInbound={m.isInbound}/>);  // className={m.isInbound ? obj.sender : obj.recipient}

    return (
        <div className={obj.dialogs}>
            <div className={obj.dialogsItems}>
                {dialogsElement}
            </div>
            <div
                className={obj.messages}> {/*className={props.isInbound ? `${obj.messages} ${obj.sender}` : `${obj.messages} ${obj.recipient}`}*/}
                {messagesElements}
                <div>
                    <textarea value={props.dialogs.state.dialogsPage.newMessageText} onChange={onMessageChange}
                              ref={newMessageElement} className={obj.txtSendMessage} placeholder='hello'/>
                </div>
                <div>
                    <button className={obj.btnSendMessage} onClick={addNewMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;