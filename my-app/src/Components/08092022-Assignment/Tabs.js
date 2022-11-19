import React, { useContext, useState } from 'react'
import '../08092022-Assignment/SCSS/MainCSS/section3.scss';
import UserContext from './Context/UserContext';
import VideoContext from './Context/videoContext';

const Tabs = (props) => {
    const [page, setPage] = useState(props.videoTab[0].key)
    const { currentLogged } = useContext(UserContext)
    const showPage = (item) => {
        setPage(item);
    }
   const {eachvideoContent}=useContext(VideoContext)
   
    return (
        <div className='section3'>
            <div className='videoNav'>
                {props.videoTab.map((videoTab, index) => (
                    <div key={index} className={`category ${page === videoTab.key ? 'active' : ''}`} onClick={() => showPage(videoTab.key)}>{videoTab.Title}</div>
                ))}
            </div>

            <div className="videoList">
                {props.videoTab.map((videoTab) => (
                    page === videoTab.key &&
                    <div className='videoList_col'>
                        {typeof (videoTab.Content) == 'object' ?

                            <>
                                {eachvideoContent.map((vids) => (
                                    <>
                                        {currentLogged?.username == vids.username &&
                                            <div className='videoContent'>
                                            <h3>{vids.title}</h3>
                                                <iframe src={vids.url} frameborder="0" width='400px'height='250px' ></iframe>
                                            </div>
                                        }
                                    </>

                                ))
                                }
                            </>
                            :
                            <div>{videoTab.Content}</div>
                        }

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tabs
