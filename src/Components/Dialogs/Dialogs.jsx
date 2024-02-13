import React from "react";
import obj from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogsItems = (props) => {
    return (
        <div>
            <NavLink to={"/dialogs/" + props.id}
                     className={navData => navData.isActive ? obj.active : obj.dialog}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={obj.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogsData = [
        {id:"1", name:"Alex"},
        {id:"2", name:"John"},
        {id:"3", name:"Jack"},
        {id:"4", name:"Miranda"},
        {id:"5", name:"Jenifer"},
    ];
    let messagesData = [
        {id:"1", message:"Hi!"},
        {id:"2", message:"How are you?"},
        {id:"3", message:"Who are you?"},
        {id:"4", message:"Where are you?"},
        {id:"5", message:"Bye-bye!"},
    ];
    return (
        <div className={obj.dialogs}>
            <div className={obj.dialogsItems}>
                <DialogsItems name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsItems name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsItems name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogsItems name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogsItems name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={obj.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
            </div>
        </div>
    )
}
export default Dialogs;