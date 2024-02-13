import React from "react";
import obj from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return <nav className={obj.nav}>
        <div>
            <NavLink to="/profile"  className = { navData => navData.isActive ? obj.activeLink : obj.item }>Profile</NavLink>
        </div>
        <div>
            <NavLink to="/dialogs" className = { navData => navData.isActive ? obj.activeLink : obj.item }>Messages</NavLink>
        </div>
        <div>
            <NavLink to="/news" className = { navData => navData.isActive ? obj.activeLink : obj.item }>News</NavLink>
        </div>
        <div>
            <NavLink to="/music" className = { navData => navData.isActive ? obj.activeLink : obj.item }>Music</NavLink>
        </div>
        <div>
            <NavLink to="/settings" className = { navData => navData.isActive ? obj.activeLink : obj.item }>Settings</NavLink>
        </div>
    </nav>
}
export default NavBar;

