import React from "react";
import obj from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let newPostElement = React.createRef();
    let addNewPost = () => {
        props.profile.dispatch({type:'ADD-POST'});
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type:'UPDATE-NEW-POST-TEXT', newText: text};
        props.profile.dispatch(action);
    }
    let postsElement = props.profile.state.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}
                                                  dislikesCount={p.dislikesCount}/>)
    return (
        <div className={obj.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.profile.state.profilePage.newPostText}
                          className={obj.textAreaNewPost}/>
            </div>
            <div>
                <button onClick={addNewPost}>Add Post</button>
            </div>
            <div>
                {postsElement}{/*/!*<Post message = {postData[0].message} likesCount = {postData[0].likesCount} dislikesCount = {postData[0].dislikesCount}/>*!/ приклад*/}
            </div>
        </div>
    )
}
export default MyPosts;
