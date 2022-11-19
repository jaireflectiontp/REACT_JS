import React from "react";
import Logo from "./Logo/logo";
import './Button1.css'
import { useState } from "react";
import Login from "../Section4/Form/login";
import Register from "../Section4/Form/register";
import '../Section4/Section4.css';
import './Section1.css';

const Section1 = () => {
  const [page, setPage] = useState('Login');
  const refreshPage = (form) => {
    page === 'SignUp' ? setPage('Login') : setPage('SignUp')
  }
  return (
    <div class="section1">
      <div><Logo /></div>
      <div>
        <div>
          <div class="btndiv"><button className="btn1" onClick={(form) => refreshPage(form)}>{page === 'Login' ? 'SignUp ' : 'Login'}</button></div>
          <div class="formdiv">
            {page === 'Login' ?
              <Login />
              :
              <Register />}
          </div>


        </div>
      </div>
    </div>
  )

}
export default Section1;