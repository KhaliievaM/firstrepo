import React from "react";
import obj from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={obj.friend}>
            <img src={require("../../../Images/indigo.jpg")}
                 alt=""/>
            <NavLink to={"/dialogs/" + props.id}
                     className={navData => navData.isActive ? obj.active : obj.dialog}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;