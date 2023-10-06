import './App.css';
import React from "@testing-library/react";
import Header from "./Components/Header";
import NavBar from "./Components/Navbar";
import Profile from "./Components/Profile";

function App() {
  return (
    <div className="app-wrapper">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*      ReactJS Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
        <Header/>
        <NavBar/>
        <Profile/>
    </div>
  );
}

export default App;


