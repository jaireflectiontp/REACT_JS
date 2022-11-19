import React from "react";
import LOGO from './image.png';
import './logo.css';
const Logo = () =>{
    return(
        <div class="logo">
            <img src={LOGO} class="logoImg"/>
        </div>
    )
}
export default Logo;