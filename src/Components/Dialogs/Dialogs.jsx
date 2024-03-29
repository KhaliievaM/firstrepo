import React from "react";
import obj from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let newMessageElement = React.createRef();
    let addNewMessage = () => {
        props.addNewMessage();
    }
    let onMessageChange = (e) => {
        let messages = e.target.value;// let message = newMessageElement.current.value;
        props.onMessageChange(messages);

    }
    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}
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
                    <textarea value={props.dialogsPage.newMessageText} onChange={onMessageChange}
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