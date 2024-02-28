import './App.css';
import React from "@testing-library/react";
import Header from "./Components/Header/Header";
import NavBar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import Settings from "./Components/Settigs/Settings"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Friends from "./Components/Friends/Friends"
import {addMessage, updateNewMessage, updateNewPostText} from "./Redux/state";


function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile/*" element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs dialogsPage={props.state.dialogsPage} addMessage={props.addMessage} updateNewMessage={props.updateNewMessage}/>}/>
                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/music/*" element={<Music/>}/>
                        <Route path="/settings/*" element={<Settings/>}/>
                        <Route path="/friends/*" element={<Friends state={props.state.sidebar}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;


