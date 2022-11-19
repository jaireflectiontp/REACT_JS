import React from "react";
import Input from "./input";
import Section2 from "../../Section2/Section2";
import Section3 from "../../Section3/Section3";
import '../Section4.css';

const Login =()=>{
    const alerto =()=>{
        alert("Please! press Ok to continue");
    }
    const enter =()=>{
alert("You have logged in successfully!")
    }
    return(
        <div>
            <Section2/>
            <Section3/>
        <div className="inputBox">
           <Input type="email" placeholder="Email Address"/>
           <Input type="password" placeholder="Password" className="pass"/>
           <div className="forgotPass" onClick={alerto}>Forgot Password?</div>
        </div>
        <button className="logbtn" onClick={enter}>Login</button>
        </div>
    )
}
export default Login;