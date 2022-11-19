import React, { useEffect, useState } from 'react';
import '../../SCSS/HeaderCSS/left_header.scss';
const Left_Header = () => {
    const [search, setSearch] = useState('')
    const [output, setOutput] = useState('')
    const [show, setShow] = useState(false)
    useEffect(() => {
        if (search.length > 0) {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then((jsonF) => {
                    console.log('jsonF', jsonF);
                    var filterJson = jsonF.filter(data => data.name.includes(search));
                    setOutput(filterJson)
                })
                .catch((error) => {
                    console.log('error', error)
                });
        }
        else if (search.length == 0) {
            setOutput()
            setShow(false)
        }
    }, [search]);

    return (
        <>
            <div className="left_header">
                <span className='logo'>LOGO</span>
                <span className='inp'><input type="text" value={search} onChange={(e) => { setSearch(e.target.value); setShow(true) }} className="inpt" />
                    <i class="fa-sharp fa-solid fa-magnifying-glass search_icon"></i>
                </span>
                {show &&
                    <div className='dataOption'>
                        <ul>
                            {output?.map((data) => {
                                return <><li>{data.name}</li>
                                </>
                            })}
                        </ul>
                    </div>
                }
            </div>
        </>
    )
}

export default Left_Header
