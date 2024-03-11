import React from "react";
import obj from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {
    let newMessageElement = React.createRef();
    let addNewMessage = () => {
        props.dialogs.dispatch({type: 'ADD-MESSAGE'});
    }
let onMessageChange = () => {
        let message = newMessageElement.current.value;
        let action = {type: 'UPDATE-NEW-MESSAGE', newMessage: message};
        props.dialogs.dispatch(action);
}
    let dialogsElement = props.dialogs.state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogs.state.dialogsPage.messages.map(m => <Message message={m.message} isInbound={m.isInbound}/>);  // className={m.isInbound ? obj.sender : obj.recipient}

    return (
        <div className={obj.dialogs}>
            <div className={obj.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={obj.messages}> {/*className={props.isInbound ? `${obj.messages} ${obj.sender}` : `${obj.messages} ${obj.recipient}`}*/}
                {messagesElements}
                <div>
                    <textarea value={props.dialogs.state.dialogsPage.newMessageText} onChange={onMessageChange} ref={newMessageElement} className={obj.txtSendMessage}/>
                </div>
                <div>
                    <button className={obj.btnSendMessage} onClick={addNewMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;