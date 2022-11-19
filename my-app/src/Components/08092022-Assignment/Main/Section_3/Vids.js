import React from 'react'
import '../../SCSS/MainCSS/section3.scss';
const Vids = (props) => {
    return (
        <div className='format'>
            <div className="vid1 vid">
                <video controls className='vidsiz'>
                    <source src={props.video} type='video/mp4' />
                </video>
            </div>
        </div>
    )
}

export default Vids;
