import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

import RegisterForm from '../Register From/RegisterForm'
import '../SCSS/login.scss'
const EditInfo = () => {

  return (
    <div className="signUp">
       <h3>Edit Profile</h3>
               <RegisterForm page='edit'/>      
    </div>
  )
}

export default EditInfo
