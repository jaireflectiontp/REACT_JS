import React from 'react'
import '../../SCSS/MainCSS/section3.scss'
const Sec3 = () => {
    const userList=JSON.parse(localStorage.getItem('videos'))
    const Mvideos=userList
  return (
    <div>
        <div className="tabs">
        <div key={index} className={`category ${page === videoTab.key ? 'active' : ''}`} onClick={() => showPage(videoTab.key)}>{videoTab.Title}</div>
        </div>
      
    </div>
  )
}

export default Sec3
