import React from 'react';
import obj from "./Friend.module.css";
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    return <div className={obj.oneFriend}>
        <NavLink to={"/friends/" + props.id} className={obj.imageEndName}><img src={require("../../../Images/indigo.jpg")} alt=""/>{props.name}</NavLink>
    </div>
}
export default Friend;