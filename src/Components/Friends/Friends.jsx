import React from "react";
import obj from "./Friends.module.css";
import Friend from "../Friends/Friend/Friend";

const Friends = (props) => {
    let friendElement = props.state.friends.map(d => <Friend name={d.name} id={d.id}/>);
    return <div className={obj.friendsContainer}>
        {friendElement}
    </div>
}
export default Friends;