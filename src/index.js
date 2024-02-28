import React from 'react';
import './index.css';
import state, {subscribe} from "./Redux/state";
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addMessage, addPost, updateNewMessage, updateNewPostText} from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state ={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessage={updateNewMessage}/>
        </React.StrictMode>
    );
}

rerenderEntireTree(state);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
subscribe(rerenderEntireTree);