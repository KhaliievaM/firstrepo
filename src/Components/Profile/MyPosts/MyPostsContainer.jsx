import React from "react";
import {updateNewPostTextPostActionCreator, addPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let addNewPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextPostActionCreator(text);
        props.store.dispatch(action);
    }

    return (<MyPosts updateNewPostText={onPostChange} addPost={addNewPost} posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}/>);
}
export default MyPostsContainer;
