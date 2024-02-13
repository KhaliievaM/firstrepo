import React from "react";
import obj from './Post.module.css'

const Post = (props) => {
    return (
        <div className={obj.item}>

            <div className={obj.avaMessage}>
                <img src={require("../../../../Images/yellow.jpg")}/>
                <div>
                    {props.message}
                </div>
            </div>

            <div className={obj.reaction}>
                <span className={obj.likesCount}><img src={require("../../../../Images/like-256.png")}
                                                      alt=""/>Like &nbsp; <div>{props.likesCount}</div></span>
                <span className={obj.dislikesCount}><img src={require("../../../../Images/968946.png")}
                                                         alt=""/>Dislike &nbsp; <div>{props.dislikesCount}</div></span>
            </div>

        </div>

    )
}
export default Post;
