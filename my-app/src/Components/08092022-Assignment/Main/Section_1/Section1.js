import React, { useState } from 'react';
import '../../SCSS/MainCSS/section1.scss';
import Section2 from '../Section_2/Section2';
import Button from '../../Header/Button/Button';
import '../../SCSS/HeaderCSS/nav.scss';
import '../../SCSS/HeaderCSS/right_header.scss';
import { Navigate, useNavigate } from 'react-router-dom';
const Section1 = () => {
  
  const [cover, setCover] = useState(false)
 const bannercollection = ['banner.jpg', 'banner2.jpg', 'banner3.png', 'banner4.jpg']
  const [selectCover, setSelectcover] = useState(bannercollection[0]);
  const selectbanner = (image) => {
    setSelectcover(image);
  }
const Navigate=useNavigate()
  const editProf=()=>{
Navigate('/EditInfo')
  }
  return (
    <>
      <div className="banner">
        <img src={`./Banner/${selectCover}`} alt="banner" className='banner_img' />
        <i class="fa-solid fa-pen edit_pen" onClick={() => setCover(true)}></i>
        <div className='sec_2'><Section2 /></div>
      </div>
      {cover &&
        <div className="banner-list">
          <div className='closeTab' ><i onClick={() => setCover(false)} class="fa-solid fa-xmark"></i></div>
          {bannercollection.map((image) => (
            <div onClick={() => selectbanner(image)}><img src={`./Banner/${image}`} alt="" className='select' /></div>
          ))
          }
          <div className='saveBtn'><button onClick={() => setCover(false)}>Save</button></div>
        </div>
      }
      <div className='btn_position' ><span onClick={editProf}><Button variation="edit" label="EDIT PROFILE" /></span></div>
    </>
  )
}

export default Section1
