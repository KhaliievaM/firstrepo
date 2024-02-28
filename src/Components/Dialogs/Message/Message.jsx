import React from "react";
import obj from "./Message.module.css"

const Message = (props) => {
    return (
        <div className={props.isInbound ? obj.messageContainer : obj.messageContainerOutBound}>
            <div className={props.isInbound ? obj.messageLeft : obj.messageRight}>{props.message}</div>
            {/*//<div className={`${obj.message} ${props.className}`}>{props.message}</div>*/}
        </div>
    )
}


export default Message;