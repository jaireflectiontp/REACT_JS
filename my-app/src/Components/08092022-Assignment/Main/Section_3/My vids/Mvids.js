import React from 'react';
import Vids from '../Vids';
import video2 from '../../../vids/vid2.mp4';
import '../../../SCSS/MainCSS/section3.scss';
const Mvids = () => {
    return (
        <>
            <div className='video-sec'>
               <Vids video={video2}/>
               <Vids video={video2}/>
               <Vids video={video2}/>
            </div>
        </>
    )
}

export default Mvids
