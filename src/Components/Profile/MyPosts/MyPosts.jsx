import React from "react";
import obj from './MyPosts.module.css'
import Post from "./Post/Post";
const MyPosts = () => {
    let postData = [
        {id: "1", message: "Hi!", likesCount: 5, dislikesCount: 0},
        {id: "2", message: "It's my first message", likesCount: 10, dislikesCount: 1},
    ]
    return(
        <div className={obj.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea name="" id="" cols="30" rows="5"></textarea>
            </div>
            <div>
                <button>Add Post</button>
            </div>
            <div>
                <Post message = {postData[0].message} likesCount = {postData[0].likesCount} dislikesCount = {postData[0].dislikesCount}/>
                <Post message = {postData[1].message}  likesCount = {postData[1].likesCount} dislikesCount = {postData[1].dislikesCount}/>
            </div>
        </div>
    )
    }
export default MyPosts;
