import React from "react";
import obj from "./Header.module.css"
const Header = () =>{
    return <header className={obj.header}>
        {/*<img src="https://png.pngtree.com/element_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg" alt=""/>*/}
        <div className={obj.logo}></div>

    </header>
}
export default Header;