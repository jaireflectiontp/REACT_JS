import React, { useContext, useEffect, useState } from 'react';
import '../../SCSS/MainCSS/section2.scss'
import PropPic from '../../img/99.jpeg';
import UserContext from '../../Context/UserContext';
const Section2 = () => {
    const openPic = () => {
        alert('open profile pic')
    }
    const {setCurrentLogged}=useContext(UserContext)
    const currentUser = sessionStorage.username;
    const userList = JSON.parse(localStorage.userList);
    const [userData, setUserData] = useState();

    useEffect(() => {
        userList?.map((user) => {
            let loggedUser = JSON.parse(user);
            if (loggedUser.username === currentUser) {
                setUserData(loggedUser)
                setCurrentLogged(loggedUser)
            }
        })
    }, [!userData])
    const {currentLogged}=useContext(UserContext)

    return (
        <>
            <div className="profile_section">
                <div className='profile_info'>
                    <div className='profile_pic'><img src={PropPic} alt="profile picture" onClick={openPic} className='pp' /></div>
                    <div className='user_detail'>
                        <h3>{currentLogged?.fullname}</h3>
                        <span><strong>{currentLogged?.city},</strong></span>
                        <span><strong>{currentLogged?.state}</strong></span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Section2
