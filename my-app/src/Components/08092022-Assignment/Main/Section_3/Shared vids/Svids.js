import React from 'react'
import video1 from '../../../vids/vid1.mp4';
import '../../../SCSS/MainCSS/section3.scss';
import Vids from '../Vids';
const Svids = () => {
    return (
        <>
            <div className='video-sec'>
                <Vids video={video1}/>
                <Vids video={video1}/>
                <Vids video={video1}/>
            </div>
        </>
    )
}

export default Svids
