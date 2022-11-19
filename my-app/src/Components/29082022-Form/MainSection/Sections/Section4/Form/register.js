import React from "react";
import Input from "./input";
import Section2_ from "../../Section2/Section2_";
import Section3_ from "../../Section3/Section3_";
import '../Section4.css';
const Register =()=>{
    return(
        
        <div>
            <Section2_/>
<Section3_/>
<Input type="text" placeholder="FirstName"/>
<Input type="text" placeholder="LastName"/>
<Input type="email" placeholder="Email Address"/>
<Input type="number" placeholder="Contact"/>
<Input type="password" placeholder="Enter Password"/>
<button className="logbtn">SignUp</button>
        </div>

    )
}
export default Register;