import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'
import '../SCSS/login.scss'
const RegisterForm = (props) => {
    const { currentLogged } = useContext(UserContext)
    const [username, setUsername] = useState(props.page === 'edit' ? currentLogged.username : '')
    const [fullname, setFullname] = useState(props.page === 'edit' ? currentLogged.fullname : '')
    const [email, setEmail] = useState(props.page === 'edit' ? currentLogged.email : '')
    const [phone, setPhone] = useState(props.page === 'edit' ? currentLogged.phone : '')
    const [city, setCity] = useState(props.page === 'edit' ? currentLogged.city : '')
    const [state, setState] = useState(props.page === 'edit' ? currentLogged.state : '')
    const [country, setCountry] = useState(props.page === 'edit' ? currentLogged.country : '')
    const [password, setPassword] = useState(props.page === 'edit' ? currentLogged.password : '')
    const [error, setError] = useState('')
    const [options, setOptions] = useState()
    const [verifyUser, setVerifyUser] = useState(false)
    const validation = () => {
        let validate = false
        if (username !== '' && fullname !== '' && email !== '' && phone !== '' && password !== '')
            validate = true;
        return validate
    }

    const loggedInUser = (userList, username) => {
        const filteredList = userList.filter((user) => {
            const Userobject = JSON.parse(user)
            if (Userobject.username === username) {
                return (user)
            }
        })
        return filteredList;
    }

    const Register = (userList, users) => {
        if (loggedInUser(userList, users.username).length > 0) {
            setVerifyUser((users.username))
            let numb = Math.random() * 10;
            if (loggedInUser(userList, users.username + parseInt(numb)).length === 0) {
                setOptions(users.username + parseInt(numb))
            }
 
        }
        else {
            setVerifyUser(false)
            userList.push(JSON.stringify(users));
            localStorage.setItem('userList', JSON.stringify(userList));
            console.log('userList', userList)
            window.location.href = '/';
        }
    }

    const SetProfile = (userList, users) => {
        const filteredList = userList.filter((user) => {
            const Userobject = JSON.parse(user)
            if (Userobject.username !== currentLogged.username) {
                return (user)
            }
        })
        filteredList.push(JSON.stringify(users));
        localStorage.setItem('userList', JSON.stringify(filteredList));
        window.location.href = '/Home';
    }

    const UpdateChanges = () => {
        if (validation()) {
            const users = {
                username: username,
                fullname: fullname,
                email: email,
                phone: phone,
                city: city,
                state: state,
                country: country,
                password: props.page === 'edit' ? currentLogged.password : password
            }
            let userList = localStorage.getItem('userList') ? JSON.parse(localStorage.getItem('userList')) : [];
            if (props.page === 'edit') {
                SetProfile(userList, users)
            }
            else {
                Register(userList, users)
            }
        }
        else {
            setError('*Please enter details')
        }
    }
    return (
        <div >
            <div className='errorMsg'>{error}</div>
            <div className="loginControl">
                <label >Username:</label>
                <div className="loginInput" >
                    <input type="text" name='usernme' value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                {verifyUser &&
                    <div className='checkUser'>{verifyUser} is already taken, please! try another.
                        <b>like:{options}</b> </div>

                }
            </div>
            <div className="loginControl">
                <label >Fullname:</label>
                <div className="loginInput">
                    <input type="text" name='fullname' value={fullname} onChange={(event) => setFullname(event.target.value)} />
                </div>
            </div>
            <div className="loginControl">
                <label >Email:</label>
                <div className="loginInput">
                    <input type="mail" name='email' value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
            </div>
            <div className="loginControl">
                <label >Phone:</label>
                <div className="loginInput">
                    <input type="number" name='phone' value={phone} onChange={(event) => setPhone(event.target.value)} />
                </div>
            </div>
            <div className="wrapControl">
                <div className="loginControl ">
                    <label >City:</label>
                    <div className="loginInput updateControl">
                        <input type="text" name='city' value={city} onChange={(event) => setCity(event.target.value)} />
                    </div>
                </div>
                <div className="loginControl ">
                    <label >State:</label>
                    <div className="loginInput updateControl">
                        <input type="text" name='state' value={state} onChange={(event) => setState(event.target.value)} />
                    </div>
                </div>
            </div>
            <div className="loginControl">
                <label >Country:</label>
                <div className="loginInput">
                    <input type="text" name='country' value={country} onChange={(event) => setCountry(event.target.value)} />
                </div>
            </div>
            {props.page !== 'edit' &&
                <div className="loginControl">
                    <label >Password:</label>
                    <div className="loginInput">
                        <input type="password" name='password' value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>
                </div>
            }
            <div className="loginControl">
                <button className='sBtn' type='button' onClick={UpdateChanges}>{props.page === 'edit' ? 'Save' : 'SignUp'}</button>
            </div>
        </div>
    )
}

export default RegisterForm
