import React from 'react';
import Tabs from '../../Tabs';


import '../../SCSS/MainCSS/section3.scss';
const Section3 = () => {
    const videoList=JSON.parse(localStorage.getItem('videos'))
    
    const videoTab = [
        {
            key: 'Mvids',
            Title: 'My Videos',
            Content: videoList
        },
        {
            key: 'Svids',
            Title: 'Shared Videos',
            Content:'nothing'
        }
    ]
    return (
        <>
            <Tabs videoTab={videoTab} />
        </>
    )
}
export default Section3
